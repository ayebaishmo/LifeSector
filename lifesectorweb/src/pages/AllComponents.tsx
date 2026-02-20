import Header  from '../base/header'
import Footer  from '../base/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import FadeCarousel from '../components/FadeCarousel';
import logo12 from './assets/IMG_1239.jpg'
import logo13 from './assets/IMG_4678.jpg'
import Pastor from './assets/Pr Don Zabbu.jpg'
import Vision from './assets/vision.jpg'
import Featurette from '../components/Featurette'
import Card from '../components/Card'
import TextCard from '../components/TextCard';

const slides = [
  {
    image: logo13,
    title: "Proverbs 2:2",
    subtitle: "Listen to what is Wise ans try to understand it",
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


function AllComp() {

  return (
    <>
      <Header />
        <FadeCarousel slides={slides} id="homeCarousel" />

        <div className="row featurette">
      <Featurette
        image={Pastor}
        altText="Amazing Feature"
        width={600}
        height={600}
      />
      <div className="col-md-7">
        <h2 className="featurette-heading">About us</h2>
        <p className="lead">Life Sector is life changing ministry centered on bring out God given
          purpose for christian
        </p>
      </div>
    </div>

    {/* card  */}
    <Card
        image={Vision}
        title="Vision"
        text="To serve God to the best "
      />
    {/* Card */}

    {/* Text Card  */}
      <TextCard
        title="Objectives"
        text="To serve as ought to be ."
        smallText="Jeremiah 5:6"
      />
    {/* Text Card  */}

      <Footer />


    </>
  )
}

export default AllComp
