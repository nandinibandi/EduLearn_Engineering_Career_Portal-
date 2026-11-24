import { Link } from "react-router-dom";

// Props: career (one career object from careers.js)
function CareerCard({ career }) {
  return (
    <div className="card">
      <h3>{career.title}</h3>
      <p>{career.description}</p>

      <div className="tags">
        {career.skills.map((skill) => (
          <span className="tag" key={skill}>{skill}</span>
        ))}
      </div>

      <Link to={`/careers/${career.id}`} className="btn btn-small">
        View Details
      </Link>
    </div>
  );
}

export default CareerCard;
