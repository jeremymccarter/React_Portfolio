import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumePDF from '../../src/Files/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
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
      };
  
      const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      };
  
      const page1 = (
        <div key={pageNumber} style={pageStyle}>
          <Page pageNumber={pageNumber} renderTextLayer={false}  renderAnnotationLayer={false}  />
        </div>
      );
  
      const page2 = (
        <div key={pageNumber + 1} style={pageStyle}>
          <Page pageNumber={pageNumber + 1} renderTextLayer={false}  renderAnnotationLayer={false}  />
        </div>
      );
  
      pages.push(
        shouldRenderSinglePage ? (
          <div key={pageNumber} style={pageStyle}>
            <Page pageNumber={pageNumber} renderTextLayer={false} />
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

  return (
    <div>
      <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
        {numPages && renderPages()}
      </Document>
    </div>
  );
}

export default Resume;