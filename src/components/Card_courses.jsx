import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { storage } from '../helpers/firebase';

const Card_courses = ({ fullName, description, img, link, date }) => {
  const [url, setUrl] = useState('');
  async function getUrl() {
    const ref = await storage.ref().child(img).getDownloadURL();
    setUrl(ref);
  }
  useEffect(() => {
    getUrl();
  }, []);
  return (
    <section className="Courses_card">
      <div className="animation-delay"></div>
      <figure className="Courses_card__containerImg">
        <img src={url} alt="name"/>
        <h1>{ fullName }</h1>
      </figure>
      <article className="description_cont">
        <h3>Descripción:</h3>
        <p className="description">{ description }</p>
      </article>
      <ul className="pub_cont">
        <h3>Publicaciones:</h3>
        <li>Continúen</li>
        <li>Nos enseña</li>
      </ul>
      <div className="buttons">
        <Link to={link}><button className="btn warning">Tareas</button></Link>
        <button className="btn success"><i className="fas fa-edit"></i> Editar</button>
        <button className="btn error"><i className="fas fa-trash"></i> Borrar</button>
      </div>
      <h2 className="date">{ date }</h2>
    </section>
  );
}

export default Card_courses;
