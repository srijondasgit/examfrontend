import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";


const QuestionRemoved = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function refreshPage() {
    window.location.reload(false);
  }
    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Delete
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Question</Modal.Title>
          </Modal.Header>
          <Modal.Body><h1>Are you sure, you want to delete this question?</h1></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={refreshPage}>
              Yes
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default QuestionRemoved;