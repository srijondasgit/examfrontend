import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import UpsertAnswers from "./UpsertAnswers";
const ModalInsertAnswer = () => {
    const [show, setShow] = useState(false);
    // const [disable, setDisable] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   function refreshPage() {
    window.location.reload(false);
  }

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Insert/Update an answer
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Answer</Modal.Title>
          </Modal.Header>
          <Modal.Body><UpsertAnswers /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose, refreshPage}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalInsertAnswer;
