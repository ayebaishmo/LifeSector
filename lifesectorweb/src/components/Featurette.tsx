import React from "react";

type FeaturetteProps = {
  image: string; 
  altText?: string;
  width?: number;
  height?: number;
  className?: string;
  borderRadius?: string | number;
};

const Featurette: React.FC<FeaturetteProps> = ({
  image,
  altText = "Feature Image",
  width = 500,
  height = 500,
  className = "",
  borderRadius = 0

}) => {
  return (
    <div className={`col-md-5 ${className}`}>
      <img
        src={image}
        alt={altText}
        className="featurette-image img-fluid mx-auto"
        style={{ objectFit: "cover",
           borderRadius: borderRadius,
            width:width,
            height:height
        }}
      />
    </div>
  );
};

export default Featurette;
