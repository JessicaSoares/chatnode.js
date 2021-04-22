import React, {useEffect, useState} from "react";
import io from 'socket.io-client'
import './App.css';
let socket;
const CONNECTION_PORT = 'localhost:3000/'we
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    socket =io(CONNECTION_PORT)

  },[CONNECTION_PORT])


  return (<div className="App">
    <h1>Chat App</h1>
    {!loggedIn ? (
      <div className="logIn">
     <div className="inputs">
       <input type="text" placeholder ="name"/>
       <input type ="text" placeholder ="room"/>
     
       </div>
       <button>  Enter Chat </button>
       </div>
    ):        (<h1> hello folks, You are Lodgged In</h1>)}
  </div>
  );
}

export default App;
