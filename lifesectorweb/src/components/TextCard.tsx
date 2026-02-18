import React from "react";

type TextCardProps = {
  title: string;       
  text: string;       
  smallText?: string; 
  className?: string;  
};

const TextCard: React.FC<TextCardProps> = ({ title, text, smallText, className = "" }) => {
  return (
    <div className={`col-sm-6 col-lg-4 mb-4 ${className}`}>
      <div className="card text-center h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          {smallText && (
            <p className="card-text">
              <small className="text-body-secondary">{smallText}</small>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextCard;
