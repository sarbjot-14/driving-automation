import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Container } from "react-bootstrap";

import "./Polls.css";
import { LeafPoll, Result } from "react-leaf-polls";
import "react-leaf-polls/dist/index.css";
import axios from "axios";
/*
Which comopany will scale self driving service best?
Which company will have safest autonomous service?
Which company will be most profitable/efficient
Which company will dominate self driving service in a decade?
Which company will perform best in all waether conditions?
*/
// Persistent data array (typically fetched from the server)
const resData = [
  { text: "Answer 1", votes: 3 },
  { text: "Answer 2", votes: 2 },
  { text: "Answer 3", votes: 8 },
];

// Object keys may vary on the poll type (see the 'Theme options' table below)
const customTheme = {
  textColor: "black",
  mainColor: "#00B87B",
  backgroundColor: "rgb(255,255,255)",
  alignment: "center",
};

function vote(result, results) {
  // Here you probably want to manage
  // and return the modified data to the server.
  console.log(result);
  console.log(results);
}

function Polls() {
  // ip address
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
    console.log(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  // polls

  return (
    <Container>
      <LeafPoll
        type="multiple"
        question="What you wanna ask?"
        results={resData}
        theme={customTheme}
        onVote={vote}
      />
    </Container>
  );
}

export default Polls;
