import React from "react";

type InfoItem = {
  icon: React.ReactNode;
  title: string;
  lines: string[];
};

type VisitOfficeProps = {
  title: string;
  items: InfoItem[];
  mapEmbedUrl: string;
};

const VisitOffice: React.FC<VisitOfficeProps> = ({
  title,
  items,
  mapEmbedUrl,
}) => {
  return (
    <div className="container-fluid py-5" style={{ background: "#046a0b" }}>
      <div className="container">
        <h2 className="text-white mb-5 fw-bold">{title}</h2>

        <div className="row g-4 align-items-stretch">
          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <div className="row g-4">
              {items.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="d-flex gap-3">
                    {/* Icon */}
                    <div
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "#80de77",
                        color: "#fff",
                        fontSize: "20px",
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h6 className="text-white fw-bold">{item.title}</h6>
                      {item.lines.map((line, i) => (
                        <p
                          key={i}
                          className="text-light mb-1"
                          style={{ opacity: 0.85 }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="col-lg-6">
            <div
              className="w-100 h-100 rounded overflow-hidden"
              style={{ minHeight: "400px" }}
            >
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                title="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitOffice;