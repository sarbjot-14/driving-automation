import React, { useEffect, useState } from "react";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateSuggestionAction } from "../actions/updateSuggestionActions";
// import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import "./Screen.css";

const Suggestion = () => {
  const dispatch = useDispatch();
  const techStackList = useSelector((state) => state.techStackList);
  const { techStacks } = techStackList;
  const [type, setType] = useState("");
  const currentOption = techStacks
    ? techStacks.find((stck) => stck.id == type)
    : {};

  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestionError, setSuggestionError] = useState(false);

  const [participant, setParticipant] = useState("");
  const [model, setModel] = useState("");
  const [lidar, setLidar] = useState("");
  const [camera, setCamera] = useState("");
  const [radar, setRadar] = useState("");
  const [level, setLevel] = useState("");
  const [compute, setCompute] = useState("");
  const [providingService, setProvidingService] = useState("");
  const [source, setSource] = useState("");

  const suggestionUpdate = useSelector((state) => state.suggestions);
  const { suggestion, loading } = suggestionUpdate;
  const options = techStacks
    ? techStacks.map((stack) => {
        return {
          option: stack.participant + " - " + stack.model,
          id: stack.id,
        };
      })
    : [];
  //console.log(options);

  const resetHandler = () => {
    setParticipant("");
    setLidar("");
    setCamera("");
    setRadar("");
    setLevel("");
    setCompute("");
    setProvidingService("");
    setType("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setSuggestionError(false);
    if (type == "") {
      console.log("Please select an entry");
      setSuggestionError(true);
      return;
    }
    dispatch(
      updateSuggestionAction(
        currentOption.id,
        currentOption.participant,
        currentOption.model,
        lidar,
        camera,
        radar,
        level,
        compute,
        providingService,
        source
      )
    );
    //if (!participant || !lidar || !category) return;

    resetHandler();
    setShowSuggestion(false);
    //history.push("/mysuggestions");
  };

  useEffect(() => {
    //dispatch();
    setLidar(currentOption ? currentOption.lidar.replace("|", "\n-") : "");
    setCamera(currentOption ? currentOption.camera.replace("|", "\n-") : "");
    setRadar(currentOption ? currentOption.radar.replace("|", "\n-") : "");
    setLevel(currentOption ? currentOption.level.replace("|", "\n-") : "");
    setCompute(currentOption ? currentOption.compute.replace("|", "\n-") : "");
    setProvidingService(
      currentOption ? currentOption.providingService.replace("|", "\n-") : ""
    );
  }, [
    dispatch,
    type,
    // successCreate,
    // successUpdate,
  ]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Button onClick={() => setShowSuggestion(!showSuggestion)}>
          Make a Suggestion
        </Button>
      </Row>
      <Row className="justify-content-center">
        {!showSuggestion && suggestion ? (
          <Card
            bg="info"
            text="dark"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Body>
              Thank you! After a review we will add your contribution.
            </Card.Body>
          </Card>
        ) : (
          <h1></h1>
        )}
      </Row>

      <Row>
        {showSuggestion && (
          <Card>
            <Card.Header>Create a new suggestion</Card.Header>
            <Card.Body>
              <Form onSubmit={submitHandler}>
                {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} */}
                <Form.Label>Select Entry</Form.Label>
                <Form.Control
                  as="select"
                  value={type}
                  onChange={(e) => {
                    //console.log("e.target.value", e.target.value);
                    setType(e.target.value);
                  }}
                >
                  <option value="">Select Entry</option>
                  {options.map((opt) => (
                    <option key={opt._id} value={opt.id}>
                      {opt.option}
                    </option>
                  ))}
                </Form.Control>

                <Form.Group controlId="participant">
                  <Form.Label>Participant</Form.Label>
                  <Form.Control
                    disabled
                    type="participant"
                    value={currentOption ? currentOption.participant : ""}
                    placeholder="Enter the participant"
                    onChange={(e) => setParticipant(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="model">
                  <Form.Label>Model</Form.Label>
                  <Form.Control
                    disabled
                    type="model"
                    value={currentOption ? currentOption.model : ""}
                    placeholder="Enter the model"
                    onChange={(e) => setModel(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="lidar">
                  <Form.Label>Lidar</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={lidar}
                    placeholder="Enter the lidar"
                    rows={3}
                    onChange={(e) => setLidar(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="camera">
                  <Form.Label>Camera</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={camera}
                    placeholder="Enter the camera"
                    rows={3}
                    onChange={(e) => setCamera(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="radar">
                  <Form.Label>Radar</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={radar}
                    placeholder="Enter the radar"
                    rows={3}
                    onChange={(e) => setRadar(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="level">
                  <Form.Label>Level</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={level}
                    placeholder="Enter the level"
                    rows={3}
                    onChange={(e) => setLevel(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="compute">
                  <Form.Label>Compute</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={compute}
                    placeholder="Enter the compute"
                    rows={3}
                    onChange={(e) => setCompute(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="providingService">
                  <Form.Label>Providing Service</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={providingService}
                    placeholder="Enter the providing service"
                    rows={3}
                    onChange={(e) => setProvidingService(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="source">
                  <Form.Label>Source</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={source}
                    placeholder="Enter link to the source/reference for this information"
                    rows={3}
                    onChange={(e) => setSource(e.target.value)}
                  />
                </Form.Group>

                {/* {loading && <Loading size={50} />} */}
                {suggestionError && (
                  <ErrorMessage>Please select an entry</ErrorMessage>
                )}
                <Button type="submit" variant="primary">
                  Submit Suggestion
                </Button>
                <Button
                  className="mx-2"
                  onClick={resetHandler}
                  variant="danger"
                >
                  Reset Feilds
                </Button>
              </Form>
            </Card.Body>

            <Card.Footer className="text-muted">
              Creating on - {new Date().toLocaleDateString()}
            </Card.Footer>
          </Card>
        )}
      </Row>
    </Container>
  );
};

export default Suggestion;
