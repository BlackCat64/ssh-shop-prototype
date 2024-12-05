import React from "react";

interface Image { // common object for storing an image
    src: string;
    alt: string;
}

interface Props {
    images: Image[];
}

function ImageCarousel({ images }: Props) {
    return (
        <div
            id="imgCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ height: "300px" }}
        >
            {/* Wrapper for slides */}
            <div
                className="carousel-inner"
                style={{ position: "absolute", inset: "0px", margin: "0%" }}
            >
                {images.map((image, index) => ( // for each image, add a div
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`} // if this is the first image, make it active
                    >
                        <img
                            src={image.src}
                            className="d-block w-100"
                            alt={image.alt}
                            style={{ height: "100%", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation buttons */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#imgCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#imgCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default ImageCarousel;
