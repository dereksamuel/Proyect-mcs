import React from 'react';

const Card_courses = () => {
  return (
    <section className="Courses_card">
      <div className="animation-delay"></div>
      <figure className="Courses_card__containerImg">
        <img src="https://www.gravatar.com/avatar/52f1dce4d23c899f6ea7bbc57e6508d6?d=identicon" alt="name"/>
        <h1>Name</h1>
      </figure>
      <article className="description_cont">
        <h3>Descripción:</h3>
        <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum tempore nemo sunt velit corporis distinctio! Quas laborum aspernatur magni quae ipsam, optio nihil, voluptatum obcaecati modi debitis minima porro.</p>
      </article>
      <ul className="pub_cont">
        <h3>Publicaciones:</h3>
        <li>Continúen</li>
        <li>Nos enseña</li>
      </ul>
      <div className="buttons">
        <button className="btn warning">Tareas</button>
        <button className="btn success"><i className="fas fa-edit"></i> Editar</button>
        <button className="btn error"><i className="fas fa-trash"></i> Borrar</button>
      </div>
      <h2 className="date">10/02/2013</h2>
    </section>
  );
}

export default Card_courses;
