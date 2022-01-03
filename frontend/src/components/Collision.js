import React, { useEffect, useState } from "react";
import { Table, Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listCollisions } from "../actions//collisionActions";
import "./Screen.css";
import Loading from "../components/Loading";

const Collision = () => {
  const dispatch = useDispatch();

  const collisionList = useSelector((state) => state.collisionList);
  const { loading, collisions } = collisionList;
  const [numberOfCollisions, setNumberOfCollisions] = useState(10);
  if (collisions) {
    //console.log(collisions)
  }
  //console.log((collisions && collisions[0].participant))
  //console.log(loading)

  const showCollisionsHandler = () => {
    let newNumberOfCollisions = numberOfCollisions == 10 ? 600 : 10;
    setNumberOfCollisions(newNumberOfCollisions);
  };
  useEffect(() => {
    dispatch(listCollisions());
  }, [
    dispatch,
    // successCreate,
    // successUpdate,
  ]);
  const headers = ["Company", "Accident Date", "Description", "Mode", "Damage"];
  //const data = [{"Id":1, "details":{}}]
  return (
    <Container>
      <Row>
        <h2 id="collision-header">
          Collisions Reported{" "}
          <a href="https://www.dmv.ca.gov/portal/vehicle-industry-services/autonomous-vehicles/">
            (DMV)
          </a>
        </h2>
        <div className="collisionTable">
          {loading && <Loading />}

          <Table responsive>
            <thead>
              <tr>
                {headers.map((tableHeader, index) => (
                  <th key={index}>{tableHeader}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {collisions &&
                collisions
                  .filter((col) => col.company !== "")
                  .splice(0, numberOfCollisions)
                  .map((col) => {
                    return (
                      <tr key={col._id}>
                        <td>{col.company}</td>
                        <td>{col.accidentDate}</td>
                        <td>{col.description}</td>
                        <td>{col.mode}</td>
                        <td>{col.damage}</td>
                      </tr>
                    );
                  })}
              <tr></tr>
            </tbody>
          </Table>
        </div>
      </Row>
      <Row>
        <Button className="showMore" onClick={() => showCollisionsHandler()}>
          Show {numberOfCollisions === 10 ? "More" : "Less"}
        </Button>
      </Row>
    </Container>
  );
};

export default Collision;
