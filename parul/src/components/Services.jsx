import React from 'react';
import "../styles/Services.css"; // Import custom styles
import gadha from "../assets/gadha.svg";
import data from "../assets/data.svg";
import report from "../assets/report.svg";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list-horizontal"> {/* Changed class name */}
        {/* Service 1 */}
        <div className="service-item-horizontal"> {/* Changed class name */}
          <div className="service-image">
            <img src={gadha} alt="Geo-Tagging" />
          </div>
          <div className="service-content">
            <h3>Geo-Tagging and Visual Evidence</h3>
            <p>
              Leverage geo-tagging technology for precise location tracking and visual documentation. Enhance transparency and accountability in your workflows.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="service-item-horizontal"> {/* Changed class name */}
          <div className="service-image">
            <img src={data} alt="Data Visualization" />
          </div>
          <div className="service-content">
            <h3>Data Visualization and Analytics</h3>
            <p>
              Transform raw data into actionable insights with our powerful analytics and data visualization tools. Make informed decisions with ease.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="service-item-horizontal"> {/* Changed class name */}
          <div className="service-image">
            <img src={report} alt="Reporting" />
          </div>
          <div className="service-content">
            <h3>Reporting</h3>
            <p>
              Generate detailed and professional reports for your projects. Our reporting tools ensure clarity and accuracy in presenting critical information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;