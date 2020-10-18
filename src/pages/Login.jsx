import React, { useEffect, useState, useCallback } from 'react';
import { Redirect, withRouter } from 'react-router';
import firebase from '../helpers/firebase';

import ModalRegister from '../components/Modal/ModalRegister';
import { AuthContext } from '../components/Auth';
import randomImgs from '../helpers/functions';
// const firebaseui = require('firebaseui');

const Login = ({ history }) => {
  // let ui;
  let [content, setContent] = useState(null);
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const { currentUser } = React.useContext(AuthContext);
  // const configUi = {
  //   signInSuccessUrl: '/x',
  //   signInOptions: [
  //     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //   ],
  // }
  async function handleLogin(e) {
    e.preventDefault();
    try {
      await firebase.auth()
      .signInWithEmailAndPassword(user, password);
      history.push({
        pathname: '/',
        state: {
          selectedPage: 0,
        },
      });
    } catch(e) {
      alert(e);
    }
  }

  useEffect(() => {
    randomImgs(setContent);
    return () => {
      document.querySelector('.modal').classList.add('notVisible');
      document.querySelector('.modal').classList.remove('Visible');
    }
  }, []);

  function setValue(e) {
    if (e.target.name === 'password') setPassword(e.target.value);
    else setUser(e.target.value);
  }

  function openModal() {
    document.querySelector('.modal').classList.remove('notVisible');
    document.querySelector('.modal').classList.add('Visible');
  }

  if (currentUser) {
    console.log(currentUser);
    return <Redirect to='/' />
  }

  return (
    <main className="Login">
      <ModalRegister />
      <div className="Login-gallery">
        {
          content
        }
        {/* <img className="img g" src={vari} alt="vari_cactus"/> */}
      </div>
      <section className="Login__container">
        <figure className="Login__info">
          <img src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/997/3582014997_a7367d1c-e735-4121-9bf3-dc8c7ecbb37b.png?cb=1598143770"
            alt="Course-space logo"/>
          <p>¿Olvidó su contraseña?</p>
          <p onClick={openModal} className="openModalRegister">¿No se ha registrado? presione aquí</p>
          <div id="container"></div>
        </figure>
        <form className="Login__form" onSubmit={handleLogin}>
          <label htmlFor="username" className="Login__form--management">
            <h1>Escriba aquí su correo electrónico:</h1>
            <div className="dashboard">
              <i className="fas fa-user"></i>
              <input className="username" id="username" type="text" placeholder="username@example.com" name="username" onChange={setValue} />
            </div>
          </label>
          <label htmlFor="password" className="Login__form--management">
            <h1>Escriba aquí su contraseña:</h1>
            <div className="dashboard">
              <i className="fas fa-key"></i>
              <input className="password" id="password" type="password" placeholder="*************" name="password" onChange={setValue} />
            </div>
          </label>
          <input className="submit" type="submit" value="Iniciar Sesión"/>
        </form>
      </section>
    </main>
  );
}

export default withRouter(Login);
