import React from "react";
const man1 = require("./images/man1.jpeg");
const man2 = require("./images/man2.jpg");

const Profile = ({ page2, code }) => {
  const scanAgain = (e) => {
    page2();
    console.log("here");
  };

  const chooseProfile = () => {
    if (code === "587shishir4521997") {
      return (
        <div>
          <div>
            <img src={man1} height="200px"></img>
            <br />
            <h2>
              Name : Hiraman Shrestha<br></br>
              Membership Status : Active
            </h2>
          </div>
          <button onClick={scanAgain}>Scan again</button>
        </div>
      );
    } else if (code === "sofiya1234") {
      return (
        <div>
          <div>
            <img src={man2} height="200px"></img>
            <br></br>
            <h2>
              {" "}
              Name : Sofiya Gurung<br></br>
              Membership Status : Active
            </h2>
          </div>
          <button onClick={scanAgain}><strong>Scan Again</strong></button>
        </div>
      );
    }
  };
  return chooseProfile();
};

export default Profile;
