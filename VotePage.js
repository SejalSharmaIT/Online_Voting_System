import React, { useState } from "react";
import axios from "axios";
//import "./VotePage.css"; // Make sure this matches your filename

export default function VotePage() {
  const [votedCandidate, setVotedCandidate] = useState(null);
  const voterId = localStorage.getItem("voterId");

  const candidates = [
    {
      name: "Aaradhya Mehta",
      party: "Lotus Alliance Party",
      image: "/image/AM.jpg", // Candidate Image
    },
    {
      name: "Vivaan Kapoor",
      party: "Marigold Jan Shakti",
      image: "/image/vk.jpg", // Candidate Image
    },
    {
      name: "Saanvi Nambiar",
      party: "Orchid National Front",
      image: "/image/SN.jpg", // Candidate Image
    },
    {
      name: "Rudra Iyer",
      party: "Sunflower Progress Movement",
      image: "/image/RI.jpg", // Candidate Image
    },
  ];
  

  const handleVote = async (candidateName) => {
    if (!candidateName) return alert("Please select a candidate");
    try {
      const res = await axios.post("http://localhost:5000/api/vote/cast", {
        voterId,
        candidate: candidateName,
      });
      if (res.data.success) {
        alert("Vote submitted successfully");
        setVotedCandidate(candidateName);
      }
    } catch (err) {
      alert("Error casting vote: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="container">
      <h2>Cast Your Vote</h2>
      {candidates.map((candidate, index) => (
        <div className="candidate-row" key={index}>
          <img src={candidate.image} alt={candidate.name} className="candidate-img" />
          <div className="candidate-info">
            <h3>{candidate.name}</h3>
            <p>{candidate.party}</p>
          </div>
          <button
            className="vote-btn"
            onClick={() => handleVote(candidate.name)}
            disabled={votedCandidate !== null}
          >
            {votedCandidate === candidate.name ? "Voted" : "Vote"}
          </button>
        </div>
      ))}
    </div>
  );
}


























/*import React, { useState } from "react";
import axios from "axios";

export default function VotePage() {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const voterId = localStorage.getItem("voterId");

  const handleVote = async () => {
    if (!selectedCandidate) return alert("Please select a candidate");
    try {
      const res = await axios.post("http://localhost:5000/api/vote/cast", {
        voterId,
        candidate: selectedCandidate,
      });
      if (res.data.success) {
        alert("Vote submitted successfully");
        setSelectedCandidate("");
      }
    } catch (err) {
      alert("Error casting vote: " + err.response?.data?.error || err.message);
    }
  };

  return (
    <div className="container">
      <h2>Cast Your Vote</h2>
      <select value={selectedCandidate} onChange={(e) => setSelectedCandidate(e.target.value)}>
        <option value="">Select Candidate</option>
        <option value="Candidate A">Candidate A</option>
        <option value="Candidate B">Candidate B</option>
      </select>
      <button className="btn" onClick={handleVote}>Submit Vote</button>
    </div>
  );
}
*/