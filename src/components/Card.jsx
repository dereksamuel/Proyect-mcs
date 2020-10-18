import React from 'react';

import Alert from './Alert';
import { AuthContext } from '../components/Auth';

export const Card_Profile = ({ children }) => {
  const { currentUser } = React.useContext(AuthContext);
  function sendEmail() {
    // currentUser.sendEmailVerification().then(() => console.log('Correo enviado'));
  }
  const handleModeDark = () => {
    const switchC = document.querySelector('.dark_mode');
    switchC.classList.toggle('active');
    if (switchC.classList.contains('active')) {
      localStorage.setItem('dark_mode', 'true');
      document.body.classList.add('DarkMode');
    } else {
      localStorage.setItem('dark_mode', 'false');
      document.body.classList.remove('DarkMode');
    }
  }
  const loadStatus = () => {
    const switchC = document.querySelector('.dark_mode');
    const getInstance = localStorage.getItem('dark_mode');
    if (getInstance === 'true') {
      switchC.classList.add('active');
    } else {
      switchC.classList.remove('active');
    }
  }
  React.useEffect(() => {
    loadStatus();
    sendEmail();
  }, []);
  if (!currentUser) return null;
  return (
    <section className="Card__Profile">
      <div className="info_user">
        {
          currentUser.photoURL ?
          <img className="Card__Profile--img" src={currentUser.photoURL} alt={currentUser.displayName}/>
          : <img className="Card__Profile--img" src="https://i.stack.imgur.com/dC3hS.png" alt={currentUser.email}/>
        }
        <hr/>
        <p className="Card__Profile--email"><strong>G-mail:</strong> {currentUser.email}</p>
        {
          currentUser.displayName &&
          <p className="Card__Profile--name"><strong>Nombre:</strong> {currentUser.displayName}</p>
        }
        <button className="dark_mode" onClick={handleModeDark}>
          <i id="sun" className="fas fa-sun"></i>
          <i id="moon" className="fas fa-moon"></i>
        </button>
        { children }
        <div className="contact">
          <h2>¿Tienes alguna duda? contáctanos aquí:</h2>
          <form action="">
            <label htmlFor="about">
              Asunto:
              <input id="about" type="text"/>
            </label>
            <label htmlFor="about">
              Mensaje:
              <textarea/>
            </label>
            <input type="submit" value="Enviar"/>
          </form>
        </div>
      </div>
      <div className="Notify">
        <h1 className="title_not">Notificaciones <button className="button_trash"><strong><i className="fas fa-trash"></i></strong></button></h1>
        <Alert message="Su cuenta será bloqueada si no acepta
          en su G-mail el mensaje de verificación dentro de 24 horas" category="Problema futuro con su cuenta" type="warning" />
        <Alert message="Su cuenta será bloqueada si no acepta
        en su G-mail" category="Problema futuro con su cuenta" type="success" />
        <Alert message="Su cuenta será eliminada de forma automática por un error masivo en el servidor" category="Su cuenta 500" type="error" />
      </div>
    </section>
  );
}
