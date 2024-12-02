import React from "react";

interface Props {
  imageOne?: string;
  imageOneAlt?: string;
  imageTwo?: string;
  imageTwoAlt?: string;
  imageThree?: string;
  imageThreeAlt?: string;
}
function CarouselAp({
  imageOne,
  imageOneAlt,
  imageTwo,
  imageTwoAlt,
  imageThree,
  imageThreeAlt,
}: Props) {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      aria-atomic="true"
      style={{ height: "400px" }}
    >
      <div
        className="carousel-inner"
        style={{ position: "absolute", inset: "0px", margin: "0%", marginTop: "-20px" }}
      >
        <div className="carousel-item active">
          <img src={imageOne} className="d-block w-100" alt={imageOneAlt} />
        </div>
        <div className="carousel-item">
          <img src={imageTwo} className="d-block w-100" alt={imageTwoAlt} />
        </div>
        <div className="carousel-item">
          <img src={imageThree} className="d-block w-100" alt={imageThreeAlt} />
        </div>
      </div>
    </div>
  );
}

export default CarouselAp;
