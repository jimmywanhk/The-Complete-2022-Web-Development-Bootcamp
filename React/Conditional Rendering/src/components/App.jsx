import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const curretnTime = new Date().getHours();


function App() {
  return (
    <div className="container">
      { isLoggedIn ? <h1>Hello</h1> : <Login /> } 
      { curretnTime > 12 ? <h1>Why are you still working?</h1> : null }
    </div>
  );
}

export default App;
