import React, { useState, useEffect } from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrolling(currentScrollPos > prevScrollPos);
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <MDBFooter
        className={`bg-light text-center text-white${isScrolling ? ' hidden' : ''}`}
        style={{ position: 'fixed', bottom: '0', left: '0', right: '0' }}
      >
        <MDBContainer className='p-0 pb-0'>
          <section className='mb-0'>
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
      <style>{`
        .hidden {
          display: none;
        }
      `}</style>
    </>
  );
}
