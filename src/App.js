import React from "react"; 
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Container from "./components/Container";
// import "./index.css";/


function App() {
  return (
    <div className="flex">
    <Sidebar/>
    <Container/>
    </div>

  );
}

export default App;
