import React, { useState, useEffect } from 'react';
import './Footer.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  return (
    <div className={`footer-margin${isScrolling ? ' scrolled' : ''}`}>
      <MDBFooter className='bg-light text-center text-white'>
        <MDBContainer className='p-0 pb-0'>
          <section className='mb-0'>
            {/* <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#3b5998' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#55acee' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#dd4b39' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='google' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#ac2bac' }}
              href='#!'
              role='button'
            >
              <MDBIcon fab icon='instagram' />
            </MDBBtn> */}

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              href='https://www.linkedin.com/in/jeremy-mccarter-25a25a276/'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              href='https://github.com/jeremymccarter'
              role='button'
            >
              <MDBIcon fab icon='github' />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div className='text-center p-0' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 JeremyMcCarter
        </div>
      </MDBFooter>
    </div>
  );
}
