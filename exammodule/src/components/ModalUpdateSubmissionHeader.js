import React, {useState} from "react";
import { Modal, Button } from "react-bootstrap";
import UpdateSubmissionHeader from "./UpdateSubmissionHeader";

const ModalUpdateSubmissionHeader = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   function refreshPage() {
    window.location.reload(false);
  }

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Update Submission Header
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Submission Header</Modal.Title>
          </Modal.Header>
          <Modal.Body><UpdateSubmissionHeader /></Modal.Body>
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

export default ModalUpdateSubmissionHeader;
