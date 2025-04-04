import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaBuilding, FaClock, FaMoneyBill, FaUserGraduate, FaBriefcase, FaUsers, FaShareAlt } from "react-icons/fa";
import "./Internship_details.css";

const InternshipDetails = () => {
    const { id } = useParams();
    const [internship, setInternship] = useState(null);

    useEffect(() => {
        fetch(`https://convict-copy-2.onrender.com/internships/${id}`)
            .then((response) => response.json())
            .then((data) => setInternship(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    if (!internship) {
        return <div className="loading">Loading...</div>;
    }


    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: internship?.title || "Internship Opportunity",
                text: `Check out this internship: ${internship?.title}`,
                url: window.location.href
            }).then(() => {
                console.log("Shared successfully");
            }).catch((error) => {
                console.error("Error sharing:", error);
            });
        } else {
            alert("Sharing not supported on this browser.");
        }
    };

    return (
        <div className="internship-container-for-details">
            {/* Internship Header */}
            <div className="internship-header">
                <div className="internship-logo-title-company">
                    <div className="logo-for-header">
                        <img src={internship?.company?.logo || "default-logo.png"} alt="Company Logo" className="company-logo" />
                    </div>
                    <div className="title-companyname-for header">
                        <h2 className="title">{internship?.internship_title || "N/A"}</h2>
                        <p className="company-name"><FaBuilding /> {internship?.company?.name || "N/A"}</p>
                    </div>
                </div>

                <div className="internship-info">

                    <p className="work-type"><FaBriefcase /> {internship?.work_type || "N/A"}</p>
                    <p className="stipend">
                        <FaMoneyBill /> ₹{internship?.stipend?.min || "0"} - ₹{internship?.stipend?.max || "0"} {internship?.stipend?.period || ""}
                    </p>
                </div>
                <div className="apply-container">
                    <Link to={`/apply/${internship?.id}`} className="apply-button">
                        {internship?.apply?.button_text || "Apply Now"}
                    </Link>

                    <button onClick={handleShare} className="share-button">
                    <FaShareAlt />Share
                    </button>
                </div>
            </div>

            {/* Internship Highlights */}
            <div className="highlights">
                {internship?.internship_highlights?.urgently_hiring && <p className="urgent">🔥 Urgently Hiring</p>}
                <p className="applicants"><FaUsers /> {internship?.internship_highlights?.applicants_count || 0} applicants</p>
            </div>

            {/* Job Role Section */}
            <div className="job-details">
                <h3 className="details-heading">Job Role</h3>
                <p><strong>Department:</strong> {internship?.internship_role?.department || "N/A"}</p>
                <p><strong>Role Category:</strong> {internship?.internship_role?.role_category || "N/A"}</p>
                <p><strong>Shift:</strong> {internship?.internship_role?.shift || "N/A"}</p>
            </div>

            {/* Job Requirements */}
            <div className="job-requirements">
                <h3 className="details-heading">Job Requirements</h3>
                <p><FaUserGraduate /> <strong>Experience:</strong> {internship?.internship_requirements?.experience || "N/A"}</p>
                <p><strong>Education:</strong> {internship?.internship_requirements?.education || "N/A"}</p>
                <p><strong>English Level:</strong> {internship?.internship_requirements?.english_level || "N/A"}</p>
            </div>

            {/* Duration */}
            <div className="duration">
                <h3 className="details-heading"><FaClock /> Duration</h3>
                <p>{internship?.duration || "N/A"}</p>
            </div>


        </div>
    );
};

export default InternshipDetails;
