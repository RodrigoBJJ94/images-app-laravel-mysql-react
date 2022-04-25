import React from "react";

const PhotoItem = (props) => {
    return (
        <div>
            <img src={props.data.url} />
            <p>{props.data.subtitle}</p>
        </div>
    )
}

export default PhotoItem;