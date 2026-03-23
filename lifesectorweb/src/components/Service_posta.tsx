import "./Service_posta.css";

type Step = {
  number: number;
  text: string;
};

type UssdServiceProps = {
  title: string;
  image: string;
  imageAlt?: string;
  steps: Step[];
};

function ServiceP({
  title,
  image,
  imageAlt = "USSD Image",
  steps,
}: UssdServiceProps) {
  return (
    <div className="container my-5">
      <div className="row align-items-center ussd-card shadow rounded overflow-hidden">
        
        {/* Left Image */}
        <div className="col-md-6 p-3">
          <img
            src={image}
            alt={imageAlt}
            className="img-fluid rounded ussd-image"
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6 p-4 bg-light position-relative ussd-content">
          <h3 className="fw-bold mb-4">{title}</h3>

          {steps.map((step) => (
            <div key={step.number} className="d-flex align-items-start mb-3">
              
              {/* Number */}
              <div className="ussd-step-number">
                {step.number}
              </div>

              {/* Text */}
              <p className="mb-0 text-muted">{step.text}</p>
            </div>
          ))}

          {/* Right Bar */}
          <div className="ussd-side-bar" />
        </div>
      </div>
    </div>
  );
}

export default ServiceP;