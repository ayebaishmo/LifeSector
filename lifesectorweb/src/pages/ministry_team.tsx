import Header from "../base/header"
import Footer from "../base/footer"

import Don from "../assets/PrDonZabbu.jpeg"
import Priscilla from "../assets/Priscilla.jpeg"
import Miriam from "../assets/Miria.jpeg"
import Rogers from "../assets/Rogers.jpg"
import Jeff from "../assets/Jeff.jpeg"
import Becky from "../assets/Becky2.jpeg"
import Fiye from "../assets/Fiye.jpeg"
import Enoch from "../assets/Enoch.jpeg"
import Gaga from "../assets/Gaga.jpeg"
import Shanita from "../assets/Shanita.jpeg"
import Sanyu from "../assets/Prossy.jpeg"
import Florah from "../assets/Mama_Florah.jpeg"
// import Ishmo from "../assets/Ishmo.jpeg"

import Team from "../components/minit_comp"


import "./ministrty_team.css"

const members = [
  { id: 1, name: "Pr. Don Zabbu", role: "Lead Pastor", image: Don },
  { id: 2, name: "Pr Priscilla  K.A", role: "Chair Person Life sector", image: Priscilla },
  { id: 3, name: "Min Rogers Keeya", role: "Deacon", image: Rogers },
  { id: 4, name: "Mama Miria Zabbu", role: "Chief Fianance Officer", image: Miriam },
  { id: 5, name: "Min Jeff W.S", role: "Min Development", image: Jeff },
  { id: 12, name: "Mama Florah", role: "Integrity minister", image: Florah },
  { id: 14, name: "Min Becky", role: "Choir Leader", image: Becky },
  { id: 8, name: "Min Fiye", role: "Assistant choir Leader", image: Fiye },
  { id: 9, name: "Min Gaga", role: "Media officer", image: Gaga },
  { id: 7, name: "Min Enoch Agaba", role: "Sound Engineer", image: Enoch },
  { id: 10, name: "Min Shanita", role: "Intercession minister", image: Shanita },
  { id: 11, name: "Min Sanyu", role: "Deputy Usher Leader", image: Sanyu },
//   { id: 13, name: "Min Ishmo", role: "Assistant media minister", image: Ishmo },
];

function MinistryTeam() {
    return(
        <div>
            <Header />
            <div>
                <div className="Teamp">
                    <h1>THE WINNING TEAM</h1>
                </div>
                <Team members={members} />
            </div>
            <Footer />
        </div>
    )
}

export default MinistryTeam