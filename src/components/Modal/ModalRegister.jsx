import React, { useState } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../helpers/firebase';

import Modal from '../Modal';
const md5 = require('md5');

const ModalRegister = ({ history }) => {
  const [emailRegister, setEmailRegister] = useState('');
  const [userRegister, setUserRegister] = useState('');
  const [passRegister, setPassRegister] = useState('');
  async function handleRegister(e) {
    e.preventDefault();
    try {
      const photoURL = `https://www.gravatar.com/avatar/${md5(emailRegister)}?d=identicon`;
      const userInfo = {
        displayName: userRegister,
        photoURL
      };
      const data = await firebase.auth().createUserWithEmailAndPassword(emailRegister, passRegister);
      await data.user.updateProfile(userInfo);
      history.push('/');
    } catch (e) {
      alert(e);
    }
  }
  return (<Modal>
    <h1>Regístrate</h1>
    <hr/>
    <form className="Register" onSubmit={handleRegister}>
      <label htmlFor="username_register" className="Register_label">
        Ingresa tu nombre completo:
        <input required onChange={(e) => setUserRegister(e.target.value)} type="text" name="username_register" id="username_register" className="Register_input" />
      </label>
      <label htmlFor="email_register" className="Register_label">
        Ingresa tu G-mail:
        <input required onChange={(e) => setEmailRegister(e.target.value)} type="email" name="email_register" id="email_register" className="Register_input" />
      </label>
      <label htmlFor="pass_register" className="Register_label">
        Introduce una contraseña:
        <input required onChange={(e) => setPassRegister(e.target.value)} type="password" name="pass_register" id="pass_register" className="Register_input" />
      </label>
      <input type="submit" value="Crear cuenta" className="submit" />
    </form>
    </Modal>);
}

export default withRouter(ModalRegister);
