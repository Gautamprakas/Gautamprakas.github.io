import React from "react";

export default function Skills() {
  const skills = [
    "Laravel","CodeIgniter","React","Node.js","PHP","JavaScript","SQL",
    "REST APIs","Python","GitHub"
  ];

  return (
    <section className="container">
      <h2>Skills</h2>
      <div className="card">
        {skills.map((s, i) => (
          <span key={i} className="badge">{s}</span>
        ))}
      </div>
    </section>
  );
}
