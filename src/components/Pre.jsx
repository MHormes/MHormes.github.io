import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"} aria-hidden={!props.load}>
      <div className="preloader-content">
        <div className="preloader-mark" role="status" aria-label="Loading" />
        <span>Loading portfolio</span>
      </div>
    </div>
  );
}

export default Pre;
