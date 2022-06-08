import React from "react";
import { Link } from "react-router-dom";
import Styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <div className={Styles.LandingPage}>
        <h4>Welcome</h4>

        <Link to="/home">
          <button className={Styles.myButton}>Enter</button>
        </Link>
      </div>
    </>
  );
}

export default LandingPage;
