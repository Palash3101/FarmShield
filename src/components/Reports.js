import React from "react";
import "../styles/Reports.css";

function Reports() {
  // Example data for the reports
  const reports = [
    {
      id: 1,
      image: "./images/images.jpg",
      diagnosis: "Wheat Rust",
      date: "2025-01-20",
    },
    {
      id: 2,
      image: "./images/images.jpg",
      diagnosis: "Corn Blight",
      date: "2025-01-18",
    },
    {
      id: 3,
      image: "./images/images.jpg",
      diagnosis: "Potato Scab",
      date: "2025-01-15",
    },

  ];

  return (
    <div className="reports">
      <div className="reports-overlay">
        <h1>My Reports</h1>
        <p>View your previous disease reports and trends.</p>
        <div className="reports-grid">
          {reports.map((report) => (
            <div
              key={report.id}
              className="report-card"
              onClick={() => alert(`Viewing details for ${report.diagnosis}`)}
            >
              <img src={report.image} alt={report.diagnosis} className="report-image" />
              <div className="report-details">
                <h3>{report.diagnosis}</h3>
                <p>{report.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;
