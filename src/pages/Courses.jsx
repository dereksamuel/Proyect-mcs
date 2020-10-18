import React from 'react';

import Card from '../components/Card_courses';

const Courses = () => {
  return (
    <section className="Courses" id="courses">
      <h1 className="h1_title"><strong><i className="fas fa-users"></i> Courses</strong></h1>
      <div className="Courses_content">
        <button className="add_course"><i className="fas fa-plus"></i></button>
      </div>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Courses;
