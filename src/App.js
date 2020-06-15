import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Createbarcode from './Components/Createbarcode'
import ReadBarcodes from "./Components/ReadBarcode";
function App() {
  const [state, setState] = useState({
    page: 1,
  });
  const changePage = (e) => {
    console.log("page Changed");
    var value = state.page + 1;
    setState({
      page: value,
    });
  };
  const page2 = (e) => {
    console.log("page Changed");
    var value = state.page - 1;
    setState({
      page: value,
    });
  };
  return (
    <div className="App">
      <h1>Welcome to HimAus Royalty</h1>
      <ReadBarcodes masterState={state} page2={page2} changePage={changePage} />
      {/* <button onClick = {changePage}> change page</button> */}
    </div>
  );
}

export default App;
