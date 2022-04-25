import React from "react";
import './Styles.css';

export default function Data({ list }) {
    return (
        <div className="divMap">
            {list.map((item, index) => (
                <div key={index} data={item} className="divData">
                    <img src={item.url} className="image" />
                    <p className="subtitle">{item.subtitle}</p>
                </div>
            ))}
        </div>
    );
};
