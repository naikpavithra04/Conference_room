import React, { useEffect, useState } from "react";
import BASE_URL from "../../api/base";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const Reports = () => {
  const [report, setReport] = useState({
    total: 0,
    approved: 0,
    pending: 0,
    rejected: 0,
    users: []
  });

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

  const chartData = [
    { name: "Approved", value: report.approved || 0 },
    { name: "Pending", value: report.pending || 0 },
    { name: "Rejected", value: report.rejected || 0 }
  ];

  const COLORS = ["#16a34a", "#f59e0b", "#dc2626"];

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>📊 Reports Dashboard</h2>

      {/* STAT CARDS */}
      <div style={styles.cardGrid}>
        <div style={styles.card}>
          <h3>Total</h3>
          <p>{report.total || 0}</p>
        </div>

        <div style={styles.cardGreen}>
          <h3>Approved</h3>
          <p>{report.approved || 0}</p>
        </div>

        <div style={styles.cardYellow}>
          <h3>Pending</h3>
          <p>{report.pending || 0}</p>
        </div>

        <div style={styles.cardRed}>
          <h3>Rejected</h3>
          <p>{report.rejected || 0}</p>
        </div>
      </div>

      {/* CHART SECTION */}
      <div style={styles.chartBox}>
        <h3>Booking Overview</h3>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div style={styles.chartBox}>
        <h3>Booking Trends</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* APPROVED USERS TABLE */}
      <div style={styles.tableBox}>
        <h3>Approved Users</h3>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Room</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {report.users && report.users.length > 0 ? (
              report.users.map((u, i) => (
                <tr key={i}>
                  <td>{u.email}</td>
                  <td>{u.roomId}</td>
                  <td>{u.date}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  No approved users
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;

/* ---------- STYLES ---------- */

const styles = {
  page: {
    padding: "30px",
    background: "#f4f6f8",
    minHeight: "100vh",
    fontFamily: "Arial"
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px"
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
    marginBottom: "20px"
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },

  cardGreen: { background: "#dcfce7", padding: "15px", borderRadius: "12px" },
  cardYellow: { background: "#fef9c3", padding: "15px", borderRadius: "12px" },
  cardRed: { background: "#fee2e2", padding: "15px", borderRadius: "12px" },

  chartBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px"
  },

  tableBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px"
  },

  table: {
    width: "100%",
    borderCollapse: "collapse"
  }
};