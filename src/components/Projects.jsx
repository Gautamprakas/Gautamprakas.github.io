import React from "react";

export default function Projects() {
  return (
    <section className="container">
      <h2>Projects</h2>

      <div className="grid">
        <div className="card">
          <h3>Panchayat Gateway</h3>
          <p>E-gram sachiv record management software.</p>
        </div>

        <div className="card">
          <h3>Passenger Amenities Automation</h3>
          <p>Automated Delhi Railways amenities workflow.</p>
        </div>

        <div className="card">
          <h3>Kalanamak Rice App</h3>
          <p>React + Node project for crop data visualization.</p>
        </div>
      </div>
    </section>
  );
}
