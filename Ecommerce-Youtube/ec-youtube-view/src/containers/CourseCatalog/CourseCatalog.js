import React from 'react';
import './CourseCatalog.css'; // Importando o CSS para o CourseCatalog
import CourseCard from '../../components/CourseCard/CourseCard'; // Importando o componente CourseCard

function CourseCatalog({ courses }) {
    return (
        <div className="course-catalog">
            {courses.map(course => (
                <CourseCard key={course.id} course={course}  />
            ))}
        </div>
    );
}

export default CourseCatalog;
