import React, { useEffect, useState } from "react";
import BASE_URL from "../../api/base";

const Reports = () => {
  const [report, setReport] = useState({});

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    try {
      const res = await fetch(`${BASE_URL}/admin/reports`);
      const data = await res.json();
      setReport(data);
    } catch (err) {
      
      alert("Failed to load report");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Reports</h2>

      <div className="mt-4">
        <p>Total Bookings: {report.total || 0}</p>
        <p>Approved Bookings: {report.approved || 0}</p>
        <p>Pending Bookings: {report.pending || 0}</p>
      </div>
    </div>
  );
};

export default Reports;