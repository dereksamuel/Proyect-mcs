import React from 'react';
import { Card_Profile } from '../components/Card';
import firebase from '../helpers/firebase';

const Profile = () => {
  return (
    <div className="Profile">
      <h1><i className="fas fa-home"></i><strong>Inicio</strong></h1>
      <Card_Profile>
        <button className="signout" onClick={() => firebase.auth().signOut()}>Cerrar sesión</button>
      </Card_Profile>
    </div>
  );
}

export default Profile;
