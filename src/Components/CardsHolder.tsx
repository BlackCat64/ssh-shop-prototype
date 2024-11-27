import React from 'react';
import Item from "./Item"
interface props{
    cardOne : React.ReactElement<typeof Item>;
    cardTwo? : React.ReactElement<typeof Item>;
    cardThree? : React.ReactElement<typeof Item>;
    cardFour? : React.ReactElement<typeof Item>;
}
function CardsHolder({ cardOne, cardTwo, cardThree, cardFour }: props) {
    const imgSize = "30px";

    return (
        <div
            className="card"
            style={{
                width: "18rem", height: "20rem", position: "relative",
            }}
        >
            {/* Top Left */}
            <div
                style={{
                    position: "absolute", top: "55px", left: "20px", width: "100px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center",
                }}
            >
                {cardOne}
            </div>

            {/* Top Right */}
            {cardTwo && (
                <div
                    style={{
                        position: "absolute", top: "55px", right: "20px", width: "100px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center",
                    }}
                >
                    {cardTwo}
                </div>
            )}

            {/* Bottom Left */}
            {cardThree && (
                <div
                    style={{position: "absolute", bottom: "55px", left: "20px", width: "100px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center",
                    }}
                >
                    {cardThree}
                </div>
            )}

            {/* Bottom Right */}
            {cardFour && (
                <div
                    style={{
                        position: "absolute", bottom: "55px", right: "20px", width: "100px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center",
                    }}
                >
                    {cardFour}
                </div>
            )}
        </div>
    );
}


export default CardsHolder;