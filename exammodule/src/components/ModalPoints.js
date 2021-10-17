import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function ModalPoints({ aid }) {
  const { uid, id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function refreshPage() {
    window.location.reload(false);
  }

  const [pointScored, setPointScored] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);

    const data = {
      pointScored: pointScored,
    };

    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    axios
      .post(
        `/teacher/testId/${id}/submissionId/${uid}/answerId/${aid}/updatePointsScored`,
        data,
        config
      )
      .then((res) => {
        setPointScored("");

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
      });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Points
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Points</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container p-3">
            <h5 className="d-inline-block mb-3"> </h5>
            <div style={{ maxWidth: 350 }}>
              <div className="form-group">
                <label htmlFor="pointScored">Points for answer</label>
                <input
                  type="text"
                  className="form-control"
                  id="pointScored"
                  placeholder="Enter Points for Answer"
                  value={pointScored}
                  onChange={(e) => setPointScored(e.target.value)}
                />
              </div>
              {isError && (
                <small className="mt-3 d-inline-block text-danger">
                  Something went wrong. Please try again later.
                </small>
              )}
              <button
                type="submit"
                className="btn btn-info mt-3 d-grid gap-2 col-12 mx-auto"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Loading..." : "Add Points"}
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={refreshPage}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPoints;
