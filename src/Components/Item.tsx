import React from 'react';
import { BrowserRouter as Router,
    Link} from "react-router-dom";

interface Props{
    imgSrc?: string;
    imgAlt?: string;
    imgSize? : string;
    link? : string;
    text? : string;
}

//used to genertate reusable item components as opposued to making the same things over and over
const Item = ({imgSrc,imgAlt,imgSize,link, text} : Props) => {
    return (
        <div >
            <Link to={link || "/"}>
                <img src={imgSrc} alt={imgAlt} style={{ width: imgSize, height: "auto", maxWidth: "100%", flexShrink: "1" }}/>
            </Link>
            <p style={{marginLeft: "1rem", flexGrow: "1"}}>{text}</p>
        </div>
    );
};

export default Item;