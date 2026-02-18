import React from "react";

type FeaturetteProps = {
  image: string; 
  altText?: string;
  width?: number;
  height?: number;
  className?: string;
};

const Featurette: React.FC<FeaturetteProps> = ({
  image,
  altText = "Feature Image",
  width = 500,
  height = 500,
  className = "",
}) => {
  return (
    <div className={`col-md-5 ${className}`}>
      <img
        src={image}
        alt={altText}
        width={width}
        height={height}
        className="featurette-image img-fluid mx-auto"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Featurette;
