import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import AddQuestion from "./AddQuestion";

const ModalAddQuestion = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   function refreshPage() {
    window.location.reload(false);
  }

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Add Question
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Question</Modal.Title>
          </Modal.Header>
          <Modal.Body><AddQuestion /></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose, refreshPage}>
              See your question
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ModalAddQuestion;
