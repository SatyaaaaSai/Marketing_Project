import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

const Applayout=()=>{
  return(
    <Header/>
  );
}

const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(<Applayout/>);
