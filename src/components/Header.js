import React, { useState } from 'react';
import {

  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>


      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '815px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Jeremy McCarter</h1>
              <h4 className='mb-3'>Portfolio</h4>
              <MDBBtn tag="a" outline size="lg" a href="mailto:jeremymccarter27@gmail.com" target="_blank">
                Contact Me
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}