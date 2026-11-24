import { useState } from "react";
import careers from "../data/careers.js";
import CareerCard from "../components/CareerCard.jsx";

function Careers() {
  const [search, setSearch] = useState("");

  // Keep only careers whose title contains the search text
  const filteredCareers = careers.filter((career) =>
    career.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="page-header">
        <h1>IT Career Roles</h1>
        <p>Discover roles, skills and roadmaps to start your engineering career.</p>
      </section>
      <div className="page">

      <input
        className="input"
        type="text"
        placeholder="Search careers (e.g. Data)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredCareers.length === 0 ? (
        <p className="message">No careers found.</p>
      ) : (
        <div className="grid">
          {filteredCareers.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      )}
      </div>
    </>
  );
}

export default Careers;
