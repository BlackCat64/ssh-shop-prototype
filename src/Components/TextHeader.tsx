import React from "react";

interface Props{
    backgroundColour?: string
    text?: string
}
function TextHeader({backgroundColour = "lightgrey", text} : Props) {
    return(
        <div style={{background: backgroundColour, height: "50px", display : "flex", alignItems: "center"}}>
            <h4 style={{paddingLeft : "5px"}}>{text}</h4>
        </div>
    )
}

export default TextHeader