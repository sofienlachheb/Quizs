import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  //le provider sera accessibl a app   sachant que App a tous ces enfants  welcome signup login errorPage...
  //tous ces composants vont consommer la classe que nous avons instancier
  //et l'instanstation est faite au niveau value
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
