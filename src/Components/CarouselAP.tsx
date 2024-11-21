import React from 'react';

interface Props{
    imageOne: string
    imageTwo: string
}
function CarouselAp() {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="..." className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    );
}

export default CarouselAp;