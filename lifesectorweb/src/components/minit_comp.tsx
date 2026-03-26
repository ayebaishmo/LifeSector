import "bootstrap/dist/css/bootstrap.min.css";
import "./minit_comp.css";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
};

type TeamProps = {
  members: TeamMember[];
};

function Team({ members }: TeamProps) {
  return (
    <div className="container py-5">
      <div className="row g-4">
        {members.map((member) => (
          <div key={member.id} className="col-6 col-md-4 col-lg-3">
            <div className="team-card text-center">
              <div className="image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <h5 className="mt-3 mb-1">{member.name}</h5>
              <p className="text-muted">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;