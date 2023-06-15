import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from '../../src/Files/resume.pdf';
import Button from 'react-bootstrap/Button';
import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(100);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleZoomIn = () => {
    setZoomLevel(prevZoomLevel => prevZoomLevel + 10);
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoomLevel => prevZoomLevel - 10);
  };

  const resetZoom = () => {
    setZoomLevel(100);
  };

  const renderPages = () => {
    const pages = [];
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber += 2) {
      const isFirstPage = pageNumber === 1;
      const isLastPage = pageNumber + 1 > numPages;
      const shouldRenderSinglePage = isFirstPage && isLastPage;

      const pageStyle = {
        marginBottom: '10px',
        textAlign: 'center',
        transform: `scale(${zoomLevel / 100})`,
      };

      const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      };

      const page1 = (
        <div key={pageNumber} style={pageStyle}>
          <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
        </div>
      );

      const page2 = (
        <div key={pageNumber + 1} style={pageStyle}>
          <Page pageNumber={pageNumber + 1} renderTextLayer={false} renderAnnotationLayer={false} />
        </div>
      );

      pages.push(
        shouldRenderSinglePage ? (
          <div key={pageNumber} style={pageStyle}>
            <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
          </div>
        ) : (
          <div key={pageNumber} style={containerStyle}>
            {page1}
            {page2}
          </div>
        )
      );
    }

    return pages;
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'resume.pdf';
    link.click();
  };

  const zoomButtonsStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '9999',
  };

  return (
    <div>
      <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
        {numPages && renderPages()}
      </Document>
      <div className="action-buttons">
        <div>
          <Button variant="outline-primary" onClick={handleZoomIn}>Zoom In</Button>
          <Button variant="outline-primary" onClick={handleZoomOut}>Zoom Out</Button>
          <Button variant="outline-primary" onClick={resetZoom}>Reset Zoom</Button>
        </div>
        <div>
          <Button variant="outline-primary" onClick={downloadResume}>Download Me!</Button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
