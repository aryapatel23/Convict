import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { FaBuilding, FaClock, FaMoneyBill, FaUserGraduate, FaBriefcase, FaUsers } from "react-icons/fa";
import "./Two_Month_internships.css";

const InternshipSearch = () => {
  const [query, setQuery] = useState("");
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllInternships = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://convict-copy-2.onrender.com/internships");
        const data = await response.json();

        if (response.ok) {
          // 🔹 Ensure filtering works correctly by making duration lowercase
          const oneMonthInternships = data.filter(
            (internship) => internship.duration.toLowerCase() === "2 months"
          );
          setInternships(oneMonthInternships);
          setFilteredInternships(oneMonthInternships);
        } else {
          setError("Failed to load internships");
        }
      } catch (err) {
        setError("Error fetching internships");
      }
      setLoading(false);
    };

    fetchAllInternships();
  }, []);

  const handleSearch = () => {
    if (!query.trim()) {
      setFilteredInternships(internships);
      return;
    }

    setLoading(true);
    setError("");

    // 🔹 Search based on correct key name (internship_title)
    const filteredResults = internships.filter((internship) =>
      internship.internship_title.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredResults.length > 0) {
      setFilteredInternships(filteredResults);
    } else {
      setError("No 1-month internships found");
      setFilteredInternships([]);
    }

    setLoading(false);
  };

  return (
    <div className="internship-full-container">
      <h2 className="internship-heading">Search for 2-Month Internships</h2>
      <div className="search-bar-for-months">
        <input
          type="text"
          className="search-input"
          placeholder="Enter internship name you want..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch} disabled={loading}>
          {loading ? <ClipLoader size={15} color="#fff" /> : "Search"}
        </button>
      </div>

      {loading && (
        <div className="loader-container">
          <ClipLoader size={50} color="#3498db" />
        </div>
      )}
      {error && <p className="error-message">{error}</p>}

      <div className="internship-list">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship) => (
            <div
              key={internship._id}
              className="internship-card"
              onClick={() => navigate(`/internship/${internship._id}`)}
              style={{ cursor: "pointer" }}
            >
              <h3 className="internship-title">{internship.internship_title}</h3>
              <p className="internship-detail"><FaBuilding/> {internship.company?.name}</p>
              

              <p className="internship-detail">
                <FaMoneyBill /> ₹{internship.stipend?.min} - ₹{internship.stipend?.max} ({internship.stipend?.period})
              </p>
              <p className="internship-detail"><FaClock /> {internship.duration}</p>
            </div>
          ))
        ) : (
          <p className="error-message">No 1-month internships available</p>
        )}
      </div>
    </div>
  );
};

export default InternshipSearch;
