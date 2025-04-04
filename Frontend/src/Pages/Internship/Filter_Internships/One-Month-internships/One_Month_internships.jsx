import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import {
  FaBuilding,
  FaClock,
  FaMoneyBill
} from "react-icons/fa";
import "./One_Month_internships.css";

const InternshipSearch = () => {
  const [query, setQuery] = useState("");
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("1 month"); // ✅ Default set to "1 month"
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllInternships = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://convict-copy-2.onrender.com/internships");
        const data = await response.json();

        if (response.ok) {
          setInternships(data);
          
          // ✅ Automatically filter for "1 month" internships on load
          const defaultFiltered = data.filter(
            (internship) => internship.duration.toLowerCase() === "1 month"
          );
          setFilteredInternships(defaultFiltered);
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
    setLoading(true);
    setError("");

    let filteredResults = internships;

    if (query.trim()) {
      filteredResults = filteredResults.filter((internship) =>
        internship.internship_title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedDuration) {
      filteredResults = filteredResults.filter(
        (internship) => internship.duration.toLowerCase() === selectedDuration.toLowerCase()
      );
    }

    if (filteredResults.length > 0) {
      setFilteredInternships(filteredResults);
    } else {
      setError("No internships found");
      setFilteredInternships([]);
    }

    setLoading(false);
  };

  return (
    <div className="internship-container">
      {/* Left Sidebar - Filters */}
      <div className="filter-section">
        <h3>Filters</h3>

        {/* Internship Duration Filter */}
        <div className="filter-category">
          <h4>Duration</h4>
          <div className="filter-item">
            <input
              type="radio"
              name="duration"
              value="1 month"
              checked={selectedDuration === "1 month"} // ✅ Default checked
              onChange={(e) => setSelectedDuration(e.target.value)}
            />
            <label>1 Month</label>
          </div>
          <div className="filter-item">
            <input
              type="radio"
              name="duration"
              value="2 months"
              checked={selectedDuration === "2 months"}
              onChange={(e) => setSelectedDuration(e.target.value)}
            />
            <label>2 Months</label>
          </div>
          <div className="filter-item">
            <input
              type="radio"
              name="duration"
              value="4 months"
              checked={selectedDuration === "4 months"}
              onChange={(e) => setSelectedDuration(e.target.value)}
            />
            <label>4 Months</label>
          </div>
          <div className="filter-item">
            <input
              type="radio"
              name="duration"
              value="6 months"
              checked={selectedDuration === "6 months"}
              onChange={(e) => setSelectedDuration(e.target.value)}
            />
            <label>6 Months</label>
          </div>
        </div>

        {/* Apply Filter Button */}
        <button className="apply-filter-btn" onClick={handleSearch}>
          Apply Filters
        </button>
      </div>

      {/* Right Side - Internship List */}
      <div className="internship-content">
        <h2 className="heading">Search for Internships</h2>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Enter internship title..."
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
                <p className="internship-detail"><FaBuilding /> {internship.company?.name}</p>
                <p className="internship-detail">
                  <FaMoneyBill /> ₹{internship.stipend?.min} - ₹{internship.stipend?.max} ({internship.stipend?.period})
                </p>
                <p className="internship-detail"><FaClock /> {internship.duration}</p>
              </div>
            ))
          ) : (
            <p className="error-message">No internships available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternshipSearch;
