import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function ResultsPage() {
  const [results, setResults] = useState([]);
  const [showGraph, setShowGraph] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/results");
        setResults(res.data);
      } catch (err) {
        console.error("Error fetching results:", err);
      }
    };

    fetchResults();
  }, []);

  const totalVotes = results.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="container">
      <h2>Live Results</h2>

      <div className="results-grid">
        {results.map((result, index) => (
          <div className="result-card" key={index}>
            <h3>{result._id}</h3> {/* Display candidate name */}
            <p>{((result.count / totalVotes) * 100).toFixed(2)}%</p> {/* Display percentage of votes */}
          </div>
        ))}
      </div>

      <button className="btn" onClick={() => setShowGraph(!showGraph)}>
        {showGraph ? "Hide Graph" : "View in Graph"}
      </button>

      {showGraph && (
        <div style={{ height: 300, marginTop: "40px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={results}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="_id" /> {/* Candidate names on the x-axis */}
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
