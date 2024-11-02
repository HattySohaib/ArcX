import React from "react";

import "./WorkflowSection.css";

import workflowbg from "../../assets/backdrops/workflowbg.png";

function WorkflowSection() {
  return (
    <section className="workflow-section">
      <img src={workflowbg} alt="" className="section-background" />
      <div className="headings">
        <p className="gray-header">How we do it?</p>
        <h2 className="section-header">Understand Our Workflow.</h2>
        <p className="section-subheader">
          We turn ideas into reality through a refined, collaborative process
          that ensures <br /> your project is executed flawlessly from start to
          finish. Here’s how we do it.
        </p>
      </div>
      <div className="workflow-step">
        <div className="step-details">
          <h3>Discovery & Consultation</h3>
          <p>Initial Meeting</p>
          <p>Needs Assessment</p>
          <p>Competitive Analysis</p>
          <p>Project Proposal</p>
        </div>
        <div className="step-number">01</div>
      </div>
    </section>
  );
}

export default WorkflowSection;
