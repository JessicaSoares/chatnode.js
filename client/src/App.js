import React, {useState} from "react";
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (<div className="App">
    {!loggedIn ? (
      <div className="logIn">
     <div className="inputs">
       <input type="text" placeholder ="name"/>
       <input type ="text" placeholder ="room"/>
       </div>
       <button>  Enter Chat </button>
       </div>
    ):        (<h1> You are Lodgged In</h1>)}
  </div>
  );
}

export default App;
