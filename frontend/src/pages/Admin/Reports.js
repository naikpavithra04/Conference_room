import React, { useEffect, useState } from "react";
import axios from "axios";

const Reports = () => {
  const [report, setReport] = useState({});

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    const res = await axios.get("http://localhost:5000/api/reports");
    setReport(res.data);
  };

  return (
    <div className="container mt-5">
      <h2>Reports</h2>

      <div className="mt-4">

        <p>Total Bookings: {report.total}</p>
        <p>Approved Bookings: {report.approved}</p>
        <p>Pending Bookings: {report.pending}</p>

      </div>
    </div>
  );
};

export default Reports;