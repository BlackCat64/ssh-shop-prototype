import React from 'react';

interface Props {
    buttonText?: string;
    isButton?: boolean;
    text? : string;
    textBoxWidth?: string;
}

function TextBox({ buttonText,isButton,text,textBoxWidth = "400px"}: Props) {
    return (
        <div style={{ width: "100%", maxWidth: textBoxWidth }}>
            <label htmlFor="fname" style={{ display: "block", marginBottom: "8px" }}>
                {text}
            </label>
            <input type="text" name="test" id="fname"
                style={{
                    width: "100%",
                    padding: "5px",
                    boxSizing: "border-box",
                }}
            />
            {isButton && (
                <div style={{ textAlign: "right", marginTop: "8px" }}>
                    <button
                        style={{padding: "5px 10px",}}>
                        {buttonText}
                    </button>
                </div>
            )}
        </div>
    );
}
export default TextBox;