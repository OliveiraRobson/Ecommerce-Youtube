import React from 'react';
import './CourseCard.css'; // Importando o CSS para o CourseCard

function CourseCard({ course }) {
    return (
        <div className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-info">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p className="course-price">{course.price}</p>
            </div>
        </div>
    );
}

export default CourseCard;
