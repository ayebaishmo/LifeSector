import Header  from "../base/header"
import Footer  from "../base/footer"
import posta_1 from "../assets/posta_1.jpeg"
import posta_3 from "../assets/posta_3.jpg"
import FadeCarousel from "../components/FadeCarousel"
import ServiceP from "../components/Service_posta"
import FlamesP from "../assets/flames_posta.jpg"

const slides = [
  {
    image: posta_3,
    title: "Proverbs 2:2",
    subtitle: "Listen to what is Wise and try to understand it",
    buttonPrimaryText: "Sermons",
    buttonSecondaryText: "Live",
    buttonPrimaryLink: "/signup",
    buttonSecondaryLink: "/about",
  },
  {
    image: posta_3,
    title: "God given purpose",
    subtitle: "Every person was created for purpose.",
    buttonPrimaryText: "Contact Us",
    buttonSecondaryText: "Live",
    buttonPrimaryLink: "/services",
    buttonSecondaryLink: "/contact",
  },

]


function Services() {
    return (
        <div>
            <Header />
            <div>
                <FadeCarousel slides={slides} id="homeCarousel" />
                <div>
                    <ServiceP
                        title="Tuesday Service"
                        image={posta_1}
                        steps={[
                            { number: 1, text: "Day: Tuesday" },
                            { number: 2, text: "Time: 6:30 pm to 9:30 pm" },
                            { number: 3, text: "Come and serve with us" },
                        ]}
                        />

                    <ServiceP
                        title="Games & Flames Service"
                        image={FlamesP}
                        steps={[
                            { number: 1, text: "Day: Sunday" },
                            { number: 2, text: "Time: 5:00 pm to 9:30 pm" },
                            { number: 3, text: "Unlearn myths and learn truths." },
                        ]}
                        />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Services