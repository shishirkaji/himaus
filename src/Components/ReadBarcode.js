import React, { useState } from "react";
import QrReader from "react-qr-reader";
import Profile from "./Profile";
const ReadBarcode = ({ masterState, changePage,page2 }) => {
  const [state, setState] = useState({ code: null });

  const handleScan = (data) => {
    if (data) {
      setState({ code: data });
      changePage();
      console.log(data);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  
  
  switch (masterState.page) {
    case 1:
      return (
        <div>
          <br/>
          <h2>Please Scan profile code</h2>
          <div>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      );
    case 2:
      return (
        <div>
          <Profile code={state.code} page2={page2} />
        </div>
      );

    default:
      break;
  }
};

export default ReadBarcode;
