import React from "react";
import carouselData from "../Data/carouselData.json";

const Carousel = () => {
  return (
    <div className="container mx-auto my-8">
      <div
        id="carouselExampleControls"
        className="carousel slide relative"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          {carouselData.map((item, index) => (
            <div
              key={item.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={item.src}
                className="block object-cover"
                alt={item.alt}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
