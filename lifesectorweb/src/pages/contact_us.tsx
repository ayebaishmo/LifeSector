
import Header from "../base/header"
import Footer from "../base/footer"
import VisitOffice from "../components/VisitOffice"
import ContactForm  from "../components/ContactForm"

import { FaBuilding, FaClock, FaPhoneAlt, FaBus } from "react-icons/fa";

function Contact() {
    return (
        <div>
            <Header />
            <div className="min-header">
                <div className="head_minist">
                    <h1>CONTACT US</h1>
                    <span>Get in touch with our team, we're here to help with all the inquiry</span>
                </div>
            </div>
            <VisitOffice
                title="Visit Our Office"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.9653658779575!2d32.540479545944784!3d0.33851712792711813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb186e123e45%3A0x14aa9e55d9249012!2sLife%20Sector%20Ministries!5e0!3m2!1sen!2sug!4v1774257901066!5m2!1sen!2sug"
                items={[
                    {
                    icon: <FaBuilding />,
                    title: "Headquarters",
                    lines: [
                        "Life Sector",
                        "Namugoona Kumansayalaze",
                        "Wakiso, Uganda",
                    ],
                    },
                    {
                    icon: <FaClock />,
                    title: "Open Hours",
                    lines: [
                        "Monday – Friday: 9:00 AM - 6:00 PM",
                        "Saturday: 9:00 AM - 4:00 PM",
                        "Sunday: 9:00 AM - 4:00 PM",
                    ],
                    },
                    {
                    icon: <FaPhoneAlt />,
                    title: "Contacts",
                    lines: ["lifesector256@gmail.com", "+256704712169", "+256704712169"],
                    },
                    {
                    icon: <FaBus />,
                    title: "Fellowship",
                    lines: [
                        "Every sunday 5:00 pm to 9:00 pm",
                        "Every Tuesday 6:00 pm to 9:30 pm",
                    ],
                    },
                ]}
                />
                <div>
                    <ContactForm  />
                </div>
            <Footer />
        </div>
    )
}

export default Contact