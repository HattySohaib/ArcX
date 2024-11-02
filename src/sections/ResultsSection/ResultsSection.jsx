import React from "react";
import "./ResultsSection.css";

function ResultsSection() {
  return (
    <section className="results-section">
      <div className="results-data">
        <p className="gray-header">Don’t believe in words?</p>
        <h2 className="section-header">Our Results Speak for Us.</h2>
        <p className="section-subheader">
          See our impact in numbers. We let our work speak for itself. Here are
          some <br /> key statistics that highlight our success and credibility.
        </p>
        <div className="results-metrics">
          <div className="metric">
            <h3>300%</h3>
            <p>Average ROI</p>
          </div>
          <div className="vr"></div>
          <div className="metric">
            <h3>10+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="vr"></div>
          <div className="metric">
            <h3>100%</h3>
            <p>Client Satisfaction Rate</p>
          </div>
          <div className="vr"></div>
          <div className="metric">
            <h3>2000+</h3>
            <p>Users Engaged with our Products</p>
          </div>
        </div>
      </div>
      <div className="tagline">
        <p>Ready to see these numbers work for you?</p>
      </div>
    </section>
  );
}

export default ResultsSection;
