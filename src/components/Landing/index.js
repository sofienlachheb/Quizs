import React, { useRef, useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  const [btn, setBtn] = useState(false);
  const refWolverine = useRef(null);

  useEffect(() => {
    refWolverine.current.classList.add("startingImg");
    setTimeout(() => {
      refWolverine.current.classList.remove("startingImg");
      setBtn(true);
    }, 1000);
  }, []);

  const setLeftImg = () => {
    refWolverine.current.classList.add("griffes-gauche");
  };

  const setRightImg = () => {
    refWolverine.current.classList.add("griffes-droite");
  };

  const clearImg = () => {
    if (refWolverine.current.classList.contains("LeftImg")) {
      refWolverine.current.classList.remove("LeftImg");
    } else if (refWolverine.current.classList.contains("RightImg")) {
      refWolverine.current.classList.remove("RightImg");
    }
  };

  const displayBtn = btn && (
    <Fragment>
      <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
        <Link className="btn-welcome" to="/signUp">
          {" "}
          inscription
        </Link>
      </div>
      <div onMouseOver={setRightImg} className="rightBox">
        <Link className="btn-welcome" to="/Login">
          connexion
        </Link>
      </div>
    </Fragment>
  );

  return (
    <main ref={refWolverine} className="welcomePage">
      {displayBtn}
    </main>
  );
};

export default Landing;
