import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Gimme a lil click!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Jeremy's Business Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks for clicking me! The best way to contact me would be at my email
            jeremymccarter27@gmail.com. I also have a github page https://github.com/jeremymccarter. Check me out!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" a href="mailto:jeremymccarter27@gmail.com" target="_blank">
            Send email
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Contact