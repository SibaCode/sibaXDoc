// src/utils/firebaseStorage.js
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL,
  deleteObject,
  listAll 
} from 'firebase/storage';
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc,
  query,
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase'; // Your existing firebase config

const storage = getStorage();

export const PDFStorage = {
  // Upload PDF to Firebase Storage and store metadata in Firestore
  async uploadPDF(file, userId = 'default-user') {
    try {
      // Create a unique filename
      const timestamp = Date.now();
      const fileName = `pdfs/${userId}/${timestamp}_${file.name}`;
      
      // Create storage reference
      const storageRef = ref(storage, fileName);
      
      // Upload file to Firebase Storage
      const snapshot = await uploadBytes(storageRef, file);
      
      // Get download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      
      // Store metadata in Firestore
      const pdfDoc = {
        name: file.name,
        fileName: fileName,
        downloadURL: downloadURL,
        size: file.size,
        type: file.type,
        userId: userId,
        uploadDate: serverTimestamp(),
        lastAccessed: serverTimestamp()
      };
      
      const docRef = await addDoc(collection(db, 'pdfs'), pdfDoc);
      
      return {
        id: docRef.id,
        ...pdfDoc,
        uploadDate: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error uploading PDF:', error);
      throw error;
    }
  },

  // Get all PDFs for a user
  async getPDFs(userId = 'default-user') {
    try {
      const q = query(
        collection(db, 'pdfs'), 
        orderBy('uploadDate', 'desc')
      );
      const querySnapshot = await getDocs(q);
      
      const pdfs = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        pdfs.push({
          id: doc.id,
          name: data.name,
          downloadURL: data.downloadURL,
          size: data.size,
          uploadDate: data.uploadDate?.toDate?.() || new Date(),
          fileName: data.fileName
        });
      });
      
      return pdfs;
    } catch (error) {
      console.error('Error getting PDFs:', error);
      throw error;
    }
  },

  // Delete PDF from both Storage and Firestore
  async deletePDF(pdfId, fileName) {
    try {
      // Delete from Firebase Storage
      const storageRef = ref(storage, fileName);
      await deleteObject(storageRef);
      
      // Delete from Firestore
      await deleteDoc(doc(db, 'pdfs', pdfId));
      
      return true;
    } catch (error) {
      console.error('Error deleting PDF:', error);
      throw error;
    }
  },

  // Get PDF download URL
  async getPDFUrl(fileName) {
    try {
      const storageRef = ref(storage, fileName);
      return await getDownloadURL(storageRef);
    } catch (error) {
      console.error('Error getting PDF URL:', error);
      throw error;
    }
  }
};