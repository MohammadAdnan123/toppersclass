import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  {
    title: 'Course 1',
    description: 'Description of Course 1',
    price: 49.99,
    imageSrc: 'course1.jpg',
  },
  {
    title: 'Course 2',
    description: 'Description of Course 2',
    price: 59.99,
    imageSrc: 'course2.jpg',
  },
  // Add more courses as needed
];

export default function Courses() {
  return (
    <div className="container">
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <CourseCard
              title={course.title}
              description={course.description}
              price={course.price}
              imageSrc={course.imageSrc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
