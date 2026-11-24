import { Link } from "react-router-dom";
import careers from "../data/careers.js";
import CareerCard from "../components/CareerCard.jsx";

function Home() {
  const categories = ["Web Development", "Data", "Testing", "Cloud", "Security"];
  // Show only the first 3 careers as featured
  const featured = careers.slice(0, 3);

  const features = [
    { icon: "🧭", title: "Explore Careers", text: "Understand IT roles, skills and responsibilities before you choose." },
    { icon: "🗺️", title: "Learning Roadmaps", text: "Follow a simple step-by-step path for each career." },
    { icon: "💼", title: "Find Jobs", text: "Search jobs and internships suited for freshers." },
    { icon: "🎤", title: "Practise Interviews", text: "Revise React, JavaScript, Python and HTML/CSS questions." },
  ];

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">For Engineering Students & Freshers</span>
          <h1>Find Your Perfect Engineering Career</h1>
          <p>
            EduLearn helps you explore IT roles, learn the skills needed, find jobs
            and practise interview questions, all in one place.
          </p>
          <div className="hero-buttons">
            <Link to="/careers" className="btn btn-light">Explore Careers</Link>
            <Link to="/jobs" className="btn btn-outline">Explore Jobs</Link>
          </div>
          <div className="stats">
            <div><strong>{careers.length}+</strong><span>Career Roles</span></div>
            <div><strong>12+</strong><span>Job Listings</span></div>
            <div><strong>16+</strong><span>Interview Questions</span></div>
          </div>
        </div>
      </section>

      <section className="page">
        <h2 className="section-title">Why EduLearn?</h2>
        <div className="grid">
          {features.map((item) => (
            <div className="card feature" key={item.title}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="page">
          <h2 className="section-title">Popular Career Categories</h2>
          <div className="category-list">
            {categories.map((name) => (
              <Link to="/careers" className="category" key={name}>{name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page">
        <h2 className="section-title">Featured Careers</h2>
        <div className="grid">
          {featured.map((career) => (
            <CareerCard key={career.id} career={career} />
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Ready to start your journey?</h2>
        <p>Create a free account and begin exploring today.</p>
        <Link to="/register" className="btn btn-light">Get Started</Link>
      </section>
    </div>
  );
}

export default Home;
