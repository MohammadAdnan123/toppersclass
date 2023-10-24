import React from 'react';
import '../styles/CourseCard.css'; // Create a CSS file for your card styles

const CourseCard = ({ title, description, price, imageSrc }) => {
  return (
    <div className="course-card card">
      <img src={imageSrc} alt={title} className="card-img-top course-image" />
      <div className="card-body">
        <h5 className="card-title course-title">{title}</h5>
        <p className="card-text course-description">{description}</p>
        <p className="card-text course-price">${price}</p>
        <a href="#" className="btn btn-primary">Purchase</a>
      </div>
    </div>
  );
};

export default CourseCard;
