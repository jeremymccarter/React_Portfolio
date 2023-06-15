import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <Button variant="primary" onClick={handleShow} style={{ fontSize: '2rem', padding: '1rem 2rem' }}>
          Gimme a lil click!
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Jeremy's Business Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thanks for clicking me! The best way to contact me would be at my email jeremymccarter27@gmail.com. I also have
          a GitHub page <a href="https://github.com/jeremymccarter" target="_blank" rel="noopener noreferrer">https://github.com/jeremymccarter</a>. Check me out!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" as="a" href="mailto:jeremymccarter27@gmail.com" target="_blank">
            Send email
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contact;
