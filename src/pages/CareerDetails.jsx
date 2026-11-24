import { useParams, Link } from "react-router-dom";
import careers from "../data/careers.js";

function CareerDetails() {
  // useParams gives us the :id from the URL, e.g. /careers/3 -> id = "3"
  const { id } = useParams();

  // URL values are strings, so convert to number before comparing
  const career = careers.find((item) => item.id === Number(id));

  if (!career) {
    return (
      <div className="page">
        <p className="message">Career not found.</p>
        <Link to="/careers" className="btn">Back to Careers</Link>
      </div>
    );
  }

  return (
    <div className="page details">
      <Link to="/careers" className="back-link">← Back to Careers</Link>
      <h2>{career.title}</h2>
      <p>{career.description}</p>

      <h3>Required Skills</h3>
      <div className="tags">
        {career.skills.map((skill) => (
          <span className="tag" key={skill}>{skill}</span>
        ))}
      </div>

      <h3>Responsibilities</h3>
      <ul>
        {career.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3>Beginner Learning Roadmap</h3>
      <ol>
        {career.roadmap.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export default CareerDetails;
