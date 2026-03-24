import GalleryComp from "../components/gallery_comp";
import Header from '../base/header'
import Footer from '../base/footer'

import "./gallery.css"

import gall from "../assets/gall.jpg"
import life_1 from "../assets/Highlights/life_1.jpg"
import life_2 from "../assets/Highlights/life_2.jpg"
import life_3 from "../assets/Highlights/life_3.jpg"
import life_4 from "../assets/Highlights/life_4.jpg"
import life_5 from "../assets/Highlights/life_5.jpg"
import life_6 from "../assets/Highlights/life_6.jpg"
import life_7 from "../assets/Highlights/life_7.jpg"
import life_8 from "../assets/Highlights/life_8.jpg"
import life_9 from "../assets/Highlights/life_9.jpg"
import life_10 from "../assets/Highlights/life_10.jpg"
import life_11 from "../assets/Highlights/life_11.jpg"
import life_12 from "../assets/Highlights/life_12.jpg"
// import life_13 from "../assets/Highlights/life_13.jpg"
// import life_14 from "../assets/Highlights/life_14.jpg"
// import life_15 from "../assets/Highlights/life_15.jpg"
// import life_16 from "../assets/Highlights/life_16.jpg"
// import life_17 from "../assets/Highlights/life_17.jpg"

const images = [
  { id: 1, image: life_1, title: "Image 1" },
  { id: 2, image: life_2, title: "Image 2" },
  { id: 3, image: life_3, title: "Image 3" },
  { id: 4, image: life_4, title: "Image 4" },
  { id: 5, image: life_5, title: "Image 5" },
  { id: 6, image: life_6, title: "Image 6" },
  { id: 7, image: life_7, title: "Image 7" },
  { id: 8, image: life_8, title: "Image 8" },
  { id: 9, image: life_9, title: "Image 9" },
  { id: 10, image: life_10, title: "Image 10" },
  { id: 11, image: life_11, title: "Image 11" },
  { id: 12, image: life_12, title: "Image 12" },
//   { id: 13, image: life_13, title: "Image 13" },
//   { id: 14, image: life_14, title: "Image 14" },
//   { id: 15, image: life_15, title: "Image 15" },
//   { id: 16, image: life_16, title: "Image 16" },
//   { id: 17, image: life_17, title: "Image 17" },
];

function Gallery() {
    return(
        <div>
            <div>
                <Header />
            </div>
            <div>
                <div className="image-wrapper">
                    <img src={gall} alt="" className="gallery-image" />
                    <div className="image-overlay"></div>
                </div>
            </div>
            <div>
                <GalleryComp items={images} />;
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Gallery
