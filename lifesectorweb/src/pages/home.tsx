import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from "../base/header";
import FadeCarousel from "../components/FadeCarousel";
import Featurette from "../components/Featurette";
import Footer from "../base/footer";
import Card from "../components/Card";


import logo12 from '../assets/IMG_1328.jpg';
import logo13 from '../assets/IMG_4678.jpg';
import Vision from '../assets/vision.jpg';

import Papa from '../assets/Papa2.jpeg';

import Life from '../assets/life-insurance.png';
import Sector from '../assets/industry.png';
import fellowship from '../assets/coordination.png';

import "./home.css";

const slides = [
  {
    image: logo13,
    title: "Proverbs 2:2",
    subtitle: "Listen to what is Wise and try to understand it",
    buttonPrimaryText: "Sermons",
    buttonSecondaryText: "Live",
    buttonPrimaryLink: "/signup",
    buttonSecondaryLink: "/about",
  },
  {
    image: logo12,
    title: "God given purpose",
    subtitle: "Every person was created for purpose.",
    buttonPrimaryText: "Contact Us",
    buttonSecondaryText: "Live",
    buttonPrimaryLink: "/services",
    buttonSecondaryLink: "/contact",
  },
];

function Home() {
  return (
    <>
      <Header />
      <FadeCarousel slides={slides} id="homeCarousel" />
      <div className="row featurette align-items-center about_us">
        <Featurette
          image={Papa}
          altText="Church worship moment"
          width={500}
          height={600}
          className="order-md-1 home_feat"
          borderRadius={26}
        />

        <div className="col-md-7 order-md-2">
          <h2 className='head_about one_head'>About us</h2>
          <h3 className="fw-bold head_about">Life Sector Fellowship</h3>
          <div className='About_us_text'>
            <p>
              <span className='abt_life'>Life Sector</span> is a weekly fellowship under ELIAZA Ministries where God’s people gather to  worship, grow spiritually, and receive prophetic and apostolic teachings. 
            </p>
            <p>
              The fellowship equips believers to apply Scripture in their everyday lives, strengthening their faith, purpose, and spiritual walk with God.
            </p>
            <hr />
            <div className='about_footer'>
              <span className='foot_abt'>Life
                <img className= "about_foot_img" src={Life} alt="" />
              </span>
              <span className='foot_abt'>Sector
                <img className= "about_foot_img" src={Sector} alt="" />
              </span>
              <span className='foot_abt'>Fellowship
                <img className= "about_foot_img" src={fellowship} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='who-beg'>
        <h2>Who we are</h2>

        <div className='who-weare'>
          <Card
            image={Vision}
            title="Mission"
            text="Achieving greatness in Christ"
          />
          <Card
            image={Vision}
            title="Vision"
            text="Influencing God's people to their God given purposes"
          />

          <Card
            image={Vision}
            title="Core Values"
            text="Excellency, Generosity"
          />
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Home;