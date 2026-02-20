import React, { useEffect, useState } from "react";
import './FadeCarousel.css';

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  buttonPrimaryText: string;
  buttonSecondaryText: string;
  buttonPrimaryLink: string;
  buttonSecondaryLink: string;
};

type FadeCarouselProps = {
  slides: Slide[];
  id?: string;
  height?: string;
};

const FadeCarousel: React.FC<FadeCarouselProps> = ({
  slides,
  id = "fadeCarousel",
  height = "130vh",
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id={id}
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div
              className={`d-flex align-items-center position-relative slide-container ${
                index === 0 && animate ? "animate" : ""
              }`}
              style={{
                height: height,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay behind text */}
              <div className="overlay" />

              {/* Text content above overlay */}
              <div className="container text-content">
                <div className="col-lg-6">
                  <h1 className="fw-bold display-4">{slide.title}</h1>
                  <p className="lead mt-3">{slide.subtitle}</p>

                  <div className="mt-4 d-flex gap-3">
                    <a href={slide.buttonPrimaryLink} className="btn btn-light px-4">
                      {slide.buttonPrimaryText}
                    </a>

                    <a href={slide.buttonSecondaryLink} className="btn btn-outline-light px-4">
                      {slide.buttonSecondaryText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FadeCarousel;