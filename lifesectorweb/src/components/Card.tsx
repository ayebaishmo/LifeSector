import React from "react";

type CardProps = {
  image: string;
  title: string;
  text: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ image, title, text, className = "" }) => {
  return (
    <div className={`col-sm-6 col-lg-4 mb-4 ${className}`}>
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
