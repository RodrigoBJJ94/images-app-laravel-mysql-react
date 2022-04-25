import React, { useState, useEffect } from "react";
import API from "./Api";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import Data from "./components/Data/Data";
import "./App.css";

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    requestList();
  }, [])

  const requestList = async () => {
    const photoList = await API.list();
    setList(photoList);
  };

  return (
    <div className="App">
      <Title />
      <Form requestList={requestList} API={API} />
      <Data list={list} />
    </div>
  );
};
