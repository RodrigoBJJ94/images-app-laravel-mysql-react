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
                <input
                    type="file"
                    name="image"
                    ref={imageRef}
                    className="inputImage"
                    onChange={event => setImage(event.target.files[0])} />
                <input
                    type="text"
                    name="subtitle"
                    placeholder="Type the subtitle"
                    value={subtitle}
                    className="inputSubtitle"
                    onChange={event => setSubtitle(event.target.value)} />
                <hr></hr>
                <button className="buttonForm">Send Image</button>
            </form>
        </div>
    );
};
