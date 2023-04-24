import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';





export default function SelectedBeast(props) {
    const [show, setShow] = useState(true);

    const handleClose = () => props.updateFunction(false);
    // const handleShow = () => setShow(true);
    console.log(show)
  return (
    <Modal show={show} onHide={handleClose}>                            {/*This is simply just the structure of the modal. and I'm just passing in the props where they belong. */}
        <Modal.Header closeButton>
          <Modal.Title>{props.currentSelectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img width="300" src={props.currentSelectedBeast.imageUrl} alt=""></img>
        <p>{props.currentSelectedBeast.description}</p>
         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}


