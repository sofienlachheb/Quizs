import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../Firebase";
import Logout from "../Logout";
import Quiz from "../Quiz";
//import Loader from "../Loader/";

const Welcome = props => {
  const firebase = useContext(FirebaseContext);

  const [userSession, setUserSession] = useState(null);
  //concernant le user pris de la firebase
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged(user => {
      user ? setUserSession(user) : props.history.push("/");
    });
    // if user session different de null
    if (!!userSession) {
      firebase
        .user(userSession.uid)
        .get()
        //doc c'est touts les donnee concernant le user
        .then(doc => {
          if (doc && doc.exists) {
            //si il existe on met cet obet dansmyData
            const myData = doc.data();
            setUserData(myData);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    return () => {
      listener();
    };
  }, [userSession, firebase, props.history]);

  return userSession === null ? (
    <Loader
      loadingMsg={"Authentification ..."}
      styling={{ textAlign: "center", color: "#FFFFFF" }}
    />
  ) : (
    <div className="quiz-bg">
      <div className="container">
        <Logout />

        <Quiz userData={userData} />
      </div>
    </div>
  );
};

export default Welcome;
