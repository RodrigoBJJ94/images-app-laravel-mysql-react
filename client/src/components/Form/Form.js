import React, { useState, useRef } from "react";
import "./Form.css";

export default function Form({ requestList, API }) {
    const [image, setImage] = useState(null);
    const [subtitle, setSubtitle] = useState("");

    const imageRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await API.upload(image, subtitle);
        imageRef.current.value = null;
        setImage(null);
        setSubtitle("");
        requestList();
    };

    return (
        <div className="divForm">
            <form onSubmit={handleSubmit} className="form">
                <input type="file" name="image" ref={imageRef} onChange={event => setImage(event.target.files[0])} className="inputImage" />
                <input type="text" name="subtitle" placeholder="Type the subtitle" value={subtitle} onChange={event => setSubtitle(event.target.value)} className="inputSubtitle" />
                <button className="buttonForm">Send Image</button>
            </form>
        </div>
    );
};
