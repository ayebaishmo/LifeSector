import Header from "../base/header"
import Footer from "../base/footer"
import Card  from "../components/Card"
import kikumi from "../assets/kikumi_insta.jpg"
import love from "../assets/love_insta.jpg"
import worship from "../assets/worship_room_insta.jpg"
import egaali from "../assets/egaali.jpg"
import men from "../assets/mademen_insta.jpg"
import Lioness from "../assets/lioness_insta.jpg"


import "./ministries.css"

function Ministry () {
    return (
        <div>
            <Header />
            <div className="min-header">
                <div className="head_minist">
                    <h1>Discover the ministries through which we serve God.</h1>
                    <span>serve, minister, enjoy, purpose</span>
                </div>
            </div>
            <div>
                <div>
                    <div className = "minist_cards">
                        <Card
                            image={kikumi}
                            title="Kikumi ku nsi"
                            text="Generational Wealth & Kingdom Greatness. 
                            We have chosen to take Mark 10:30 personally. In this annual sermon series, we focus on practical knowledge that helps believers build generational wealth while pursuing greatness in Christ."
                        />

                        <Card
                            image={love}
                            title="Mukwano mu viivi"
                            text="Love in the Knee To others, love is celebrated in February. At Life Sector, our month of love is November, which we call “Mukwano Mu Viivi” — meaning Love in the Knee, symbolizing deep, intentional, and lasting love. In this annual sermon series, we focus on building long-lasting relationships, godly marriages, and raising children in the ways of the Lord. We also guide those seeking love while helping those who have found it nurture and sustain it for a lifetime."
                        />
                        <Card
                            image={love}
                            title="Uplift"
                            text="Financial Empowerment & Life Transformation We believe in empowering others financially to break free from the cycle of poverty. After spiritual discipleship, many believers discover their purpose and place of work but still need practical support to take off and stand strong."
                        />
                    </div>
                    <div className = "minist_cards">
                        <Card
                            image={love}
                            title="Uplift"
                            text="Financial Empowerment & Life Transformation We believe in empowering others financially to break free from the cycle of poverty. After spiritual discipleship, many believers discover their purpose and place of work but still need practical support to take off and stand strong. Just like Peter helped the man at the Beautiful Gate rise after praying for him, we aim to provide the practical boost people need to build stable livelihoods, grow their income, and step into the futures God has called them to."
                        />

                        <Card
                            image={love}
                            title="Salt & Light"
                            text="Raising a Stronger Generation We believe it is better to build strong children than to repair broken adults. That is why we take the Gospel directly into schools—where young hearts are open and futures are being shaped. Through school outreaches, we preach Christ, lead altar calls, baptize new believers, and disciple students into a life of purpose. By reaching schools intentionally, we maximize impact while stewarding Kingdom resources wisely. We also support students in need with tuition assistance and essential learning materials, ensuring they grow both spiritually and academically. "
                        />

                        <Card
                            image={worship}
                            title="Worship Room"
                            text="Raising a Stronger Generation We believe it is better to build strong children than to repair broken adults. That is why we take the Gospel directly into schools—where young hearts are open and futures are being shaped. Through school outreaches, we preach Christ, lead altar calls, baptize new believers, and disciple students into a life of purpose. By reaching schools intentionally, we maximize impact while stewarding Kingdom resources wisely. We also support students in need with tuition assistance and essential learning materials, ensuring they grow both spiritually and academically. "
                        />
                    </div>
                    <div className = "minist_cards">
                        <Card
                            image={egaali}
                            title="Egaali ya Yesu"
                            text="In the suburbs of Kampala, a few young men are known for a practice they do to walk towards you and leave you with none of your belongings. In Egaali ya Yesu we disarm you of everything else that is not Jesus. It is an evangelism mission to spread the word of God to the surrounding communities."
                        />
                        <Card
                            image={men}
                            title="Made Men"
                            text="“Males are born. Men are made.” is our slogan for the Men’s Fellowship. Here, men inspire and sharpen one another to grow into the fullness of their God-intended roles, responsibilities, and impact in society."
                        />
                        <Card
                            image={Lioness}
                            title="Lioness"
                            text="Like a lioness in the jungle, the Ladies’ Fellowship is designed to equip modern young women with the skills and wisdom to live virtuously in a changing world while fulfilling their God-given purpose."
                        />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Ministry