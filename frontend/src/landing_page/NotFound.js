import React from "react";

function NotFound() {
  return (
    <div className="container p-5  mt-5">
      <div className="row text-center">
        <h2 className='fs-3 text-danger fw-bold' >404 Not Found</h2>
        <p className="mt-2">
            Sorry, the page you are looking for does not exit.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
