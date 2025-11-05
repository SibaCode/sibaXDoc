// src/components/PDFViewer.js
import React, { useState } from 'react';
import './PDFViewer.css';

// Import your PDF file
import React1 from '../pdfs/React_1.pdf';

const PDFViewer = () => {
  const [currentPdf, setCurrentPdf] = useState(null);

  const pdfLibrary = [
    {
      id: 1,
      name: "React Documentation",
      file: React1,
      description: "React components and hooks guide"
    }
  ];

  const openPDF = (pdf) => {
    setCurrentPdf(pdf);
  };

  const closePDF = () => {
    setCurrentPdf(null);
  };

  return (
    <div className="pdf-viewer-container">
      <header className="page-header">
        <h2>Document Library</h2>
        <p>Access your project documents and manuals</p>
      </header>

      <div className="pdf-content">
        {currentPdf ? (
          <div className="pdf-display">
            <div className="pdf-header">
              <div className="pdf-info">
                <h3>{currentPdf.name}</h3>
                <p>{currentPdf.description}</p>
              </div>
              <button 
                onClick={closePDF}
                className="btn btn-clear btn-small"
              >
                ← Back to Library
              </button>
            </div>
            
            <div className="pdf-embed-container">
              <embed
                src={currentPdf.file}
                type="application/pdf"
                width="100%"
                height="600px"
              />
            </div>
            
            <div className="pdf-actions">
              <a 
                href={currentPdf.file} 
                download
                className="btn btn-primary"
              >
                Download PDF
              </a>
              <a 
                href={currentPdf.file} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Open in New Tab
              </a>
            </div>
          </div>
        ) : (
          <div className="pdf-library">
            <div className="library-header">
              <h3>Available Documents ({pdfLibrary.length})</h3>
              <p>Click on any document to view it</p>
            </div>
            
            <div className="pdf-grid">
              {pdfLibrary.map(pdf => (
                <div 
                  key={pdf.id} 
                  className="pdf-card"
                  onClick={() => openPDF(pdf)}
                >
                  <div className="pdf-card-icon">📄</div>
                  <div className="pdf-card-info">
                    <h4 className="pdf-card-title">{pdf.name}</h4>
                    <p className="pdf-card-description">{pdf.description}</p>
                  </div>
                  <div className="pdf-card-arrow">→</div>
                </div>
              ))}
            </div>
            
            <div className="library-info">
              <h4>About This Library</h4>
              <p>
                All documents are bundled with the application and load instantly.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;