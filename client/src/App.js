import React, { useRef, useState, useEffect } from "react";
import API from "./Api";
import './App.css';
import PhotoItem from "./PhotoItem";

export default function App() {
  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const [subtitle, setSubtitle] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    requestList();
  }, [])

  const requestList = async () => {
    const photoList = await API.list();
    setList(photoList);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await API.upload(image, subtitle);
    imageRef.current.value = null;
    setImage(null);
    setSubtitle("");
    requestList();
  };

  return (
    <div className="App">
      <div>
        <h1>Envie sua foto</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" ref={imageRef} onChange={event => setImage(event.target.files[0])} />
          <input type="text" name="subtitle" placeholder="Type the subtitle" value={subtitle} onChange={event => setSubtitle(event.target.value)} />
          <button>Enviar foto</button>
        </form>
      </div>
      <div>
        {list.map((item, index) => (
          <PhotoItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
//
//alt={item.subtitle}
/*
<div key={index} data={item} className="divMap">
            <img src={item.url} />
            <p>{item.subtitle}</p>
          </div>*/