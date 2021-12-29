import React, { useEffect } from "react";
// import { Button, Container, Row } from "react-bootstrap";
//import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Mileage from "../../components/Mileage";
import Mileage from "../../components/Mileage";
import Disengage from "../../components/Disengage";
import MileageDisengage from "../../components/MileageDisengage";
import Collision from "../../components/Collision";


//import "./LandingStyles.css";

function LandingPage({ history }) {



  return (
    <div>
  <div><Mileage/></div>
    <div><Disengage/></div>
    <div><MileageDisengage/></div>
    <div><Collision/></div>

    </div>
  
  );
}

export default LandingPage;
