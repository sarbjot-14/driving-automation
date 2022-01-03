import React, {  } from "react";
import { Container, Row } from "react-bootstrap";
import "../../components/Screen.css";

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
    <Container>

    <Row><Mileage/></Row>
    <Row><Disengage/></Row>
    <Row><MileageDisengage/></Row>
    <Row><Collision/></Row>

    </Container>
  
  );
}

export default LandingPage;
