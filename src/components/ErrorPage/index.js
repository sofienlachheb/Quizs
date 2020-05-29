import React from "react";
import batman from "../../images/batman.png";

const centerH2 = {
  textAlign: "center",
  marginTop: "50px"
};
const centerImg = {
  display: "block",
  margin: "40px auto"
};
const ErrorPage = () => {
  return (
    <div className="quiz-bg">
      <div className="container">
        <p style={centerH2}>oops, cette page n.existe pas </p>
        <img style={centerImg} src={batman} alt="batman" />
      </div>
    </div>
  );
};
export default ErrorPage;
