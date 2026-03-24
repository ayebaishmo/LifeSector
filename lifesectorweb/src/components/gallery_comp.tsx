import "./gallery_Comp.css";

type GalleryItem = {
  id: number;
  image: string;
  title?: string;
};

type GalleryProps = {
  items: GalleryItem[];
};

function GalleryComp({ items }: GalleryProps) {
  return (
    <div className="container py-4">
      <div className="row g-3">
        {items.map((item) => (
          <div key={item.id} className="col-6 col-md-4 col-lg-3">
            <div className="gallery-card">
              <img src={item.image} alt={item.title || "gallery"} />
              {item.title && (
                <div className="overlay">
                  <p>{item.title}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryComp;