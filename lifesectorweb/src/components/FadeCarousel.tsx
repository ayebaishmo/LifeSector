import React from "react";

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
  height?: string; // e.g., "80vh" or "600px"
};

const FadeCarousel: React.FC<FadeCarouselProps> = ({
  slides,
  id = "fadeCarousel",
  height = "170vh",
}) => {
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
            {/* Background Image with overlay */}
            <div
              className="d-flex align-items-center text-white position-relative"
              style={{
                height: height,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.4)",
                  zIndex: 1,
                }}
              />

              {/* Text content */}
              <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="col-lg-6">
                  <h1 className="fw-bold display-4">{slide.title}</h1>
                  <p className="lead mt-3">{slide.subtitle}</p>

                  <div className="mt-4 d-flex gap-3">
                    <a
                      href={slide.buttonPrimaryLink}
                      className="btn btn-light px-4"
                    >
                      {slide.buttonPrimaryText}
                    </a>

                    <a
                      href={slide.buttonSecondaryLink}
                      className="btn btn-outline-light px-4"
                    >
                      {slide.buttonSecondaryText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" />
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default FadeCarousel;
