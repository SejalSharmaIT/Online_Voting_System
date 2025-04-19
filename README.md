# Online_Voting_System

# 🗳️ Online Voting System

A secure and user-friendly Online Voting System built with **React.js (Frontend)** and **Express.js (Backend)**. This platform allows voters to log in using a unique Voter ID, vote for their preferred candidate, and view live results both in percentage and graph form.

---

## 🚀 Features

- ✅ Voter Login with UUID-based Voter ID
- ✅ Candidate List with Party Names & Images
- ✅ Cast Vote Button (Single Vote Enforcement)
- ✅ Live Results Display with Percentage
- ✅ Graphical Representation (Bar Chart)
- ✅ Admin-friendly Backend API
- ✅ Modern UI with Responsive Design

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- Axios
- Recharts (for graphs)
- CSS (customized)

**Backend**
- Express.js
- MongoDB
- UUID (for generating Voter IDs)
- CORS & dotenv

---

## 🧩 Folder Structure

online-voting-system/
│
├── client/                           # React Frontend
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── pages/                   # Page-level components
│   │   │   ├── Login.js
│   │   │   ├── Vote.js
│   │   │   ├── ResultsPage.js
│   │   │   └── Home.js
│   │   │
│   │   ├── App.js                   # Main routing component
│   │   ├── index.js                 # ReactDOM entry
│   │   └── App.css                  # Full custom styles
│   │
│   └── package.json
│
├── server/                          # Node.js + Express Backend             
│   │
│   ├── models/                      # Mongoose schemas
│   │   ├── Voter.js
│   │   └── Candidate.js
│   │
└── ├── routes/                      # API endpoints
         ├── auth.js
         ├── vote.js
         └── results.js



