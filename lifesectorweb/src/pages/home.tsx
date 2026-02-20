import Header from "../base/header";
import FadeCarousel from "../components/FadeCarousel";
import Footer from "../base/footer";

import logo12 from '../assets/IMG_1239.jpg';
import logo13 from '../assets/IMG_4678.jpg';

import "./Home.css";

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
      <Footer />

    </>
  );
}

export default Home;