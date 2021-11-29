import React from "react";
import { Button } from "react-bootstrap";
function Logout() {
  const clear = window.localStorage.clear();
  return (
    <div className="container">
      <h5 className="d-inline-block mb-3"> </h5>

      <div
        style={{
          background: "rgb(245 245 245)",
          borderRadius: 10,
          border: 1,
          borderColor: "#ccc",
        }}
      >
        You have logout, Please Login <a href="/user/authenticate">here</a>
        {/* <Button onClick={clear}>Logout</Button> */}
      </div>
    </div>
  );
}

export default Logout;
