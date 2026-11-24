import { useState, useEffect } from "react";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Runs once, when the page first loads (empty [] dependency array)
  useEffect(() => {
    async function fetchJobs() {
      try {
        // jobs.json lives in the public folder, so this URL works in dev and on Vercel
        const response = await fetch("/jobs.json");
        if (!response.ok) {
          throw new Error("Server error");
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError("Could not load jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  const categories = ["All", "Frontend", "Backend", "Data", "Testing", "DevOps"];

  const filteredJobs = jobs.filter((job) => {
    const matchesTitle = job.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || job.category === category;
    return matchesTitle && matchesCategory;
  });

  return (
    <>
      <section className="page-header">
        <h1>Job Opportunities</h1>
        <p>Browse fresher-friendly jobs and internships.</p>
      </section>
      <div className="page">

      <div className="filters">
        <input
          className="input"
          type="text"
          placeholder="Search jobs by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>

      {loading && <p className="message">Loading jobs...</p>}
      {error && <p className="message error">{error}</p>}
      {!loading && !error && filteredJobs.length === 0 && (
        <p className="message">No jobs available.</p>
      )}

      <div className="grid">
        {filteredJobs.map((job) => (
          <div className="card" key={job.id}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <a href={job.url} target="_blank" rel="noreferrer" className="btn btn-small">
              Apply
            </a>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default Jobs;
