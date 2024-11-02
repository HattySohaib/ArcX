import React from "react";
import "./ServicesSection.css";

import servicesbg from "../../assets/backdrops/servicesbg.png";

const services = [
  {
    title: "Web Design and Development",
    description:
      "We craft custom websites that do more than just look good—they perform. Whether you need a sleek business website, a dynamic e-commerce platform, or a robust web application, our development team leverages the latest technologies to create websites that are fast, secure, and scalable. Your website is your digital storefront; we make sure it’s open for business 24/7.   ",
  },
  {
    title: "Android Design and Development",
    description:
      "In a world where mobile is king, we help you stay ahead of the curve. We design and develop Android apps that are not only aesthetically pleasing but also optimized for performance and usability.",
  },
  {
    title: "UI/UX Design and Prototyping",
    description:
      "Design is more than just aesthetics. It’s about creating intuitive experiences that engage users and keep them coming back. Our UI/UX designs are rooted in understanding user behavior and making interactions as seamless as possible.",
  },
  {
    title: "SEO Services and Indexing Plans",
    description:
      "We craft custom websites that do more than just look good—they perform. From responsive designs to user-friendly interfaces, our web solutions are built to impress and function seamlessly.",
  },
  {
    title: "Branding and Identity Design",
    description:
      "Your brand is more than just a logo; it’s the essence of your business. We help you define your brand’s identity through thoughtful design and strategic thinking, ensuring your business stands out in a crowded marketplace.",
  },
  {
    title: "Consultancy and Maintenance",
    description:
      "We craft custom websites that do more than just look good—they perform. From responsive designs to user-friendly interfaces, our web solutions are built to impress and function seamlessly.",
  },
];

function ServicesSection() {
  return (
    <section className="services-section">
      <img className="section-background" src={servicesbg} alt="" />
      <p className="page-subheading">KNOW OUR SERVICES AND</p>
      <h2 className="section-header">
        Let's Create Something <br /> Amazing Together.
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
            <button className="learn-more-button">Learn more</button>
          </div>
        ))}
      </div>
      <button className="special-action">Explore our work</button>
    </section>
  );
}

export default ServicesSection;
