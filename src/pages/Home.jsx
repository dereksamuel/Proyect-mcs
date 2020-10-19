import React, { useEffect } from 'react';
import RouterCarousel from 'react-router-carousel';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';

import Error404 from './Error404';

const Home = ({ children, history }) => {
  const loadStatus = () => {
    const getInstance = localStorage.getItem('dark_mode');
    if (getInstance === 'true') {
      document.body.classList.add('DarkMode');
    } else {
      document.body.classList.remove('DarkMode');
    }
  }
  useEffect(() => {
    loadStatus();
  }, []);
  return (
    <main className="Home">
      <button className="arrow-left" onClick={() => history.goBack()}><i className="fas fa-hand-point-left"></i></button>
      <div className="carrousel_container">
        <RouterCarousel
          swipeLeftClassName={'router-carousel-zone router-carousel-zone--left'}
          swipeRightClassName={'router-carousel-zone router-carousel-zone--right'}
          fallbackRoute={<Error404 />}
        >
          {
            children
          }
        </RouterCarousel>
        <footer className="Menu">
          <nav className="Menu_nav--data">
            <ul>
              <li><NavLink exact to="/courses" activeClassName="is-selected">Cursos <div className="arrow"></div></NavLink></li>
              <li><a href="#">Publicaciones</a></li>
            </ul>
          </nav>
          <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/997/3582014997_a7367d1c-e735-4121-9bf3-dc8c7ecbb37b.png?cb=1598143770"
              alt="Course-space logo"/>
          <nav className="Menu_nav--user">
            <ul>
              <li><NavLink exact to="/" activeClassName="is-selected">Inicio <div className="arrow"></div></NavLink></li>
              <li><a href="#"><i className="fas fa-user-cog"></i> Configuración de usuario</a></li>
            </ul>
          </nav>
        </footer>
      </div>
      <button className="arrow-right" onClick={() => history.goForward()}><i className="fas fa-hand-point-right"></i></button>
    </main>
  );
}

export default withRouter(Home);
