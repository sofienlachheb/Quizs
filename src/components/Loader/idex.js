import React, { Fragment } from "react";

const Loader = ({ loadingMsg, styling }) => {
  return (
    <Fragment>
      <div className="loader" />
      <p style={styling}>{loadingMsg}</p>
    </Fragment>
  );
};

export default Loader;
