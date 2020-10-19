import React from 'react';
import { useEffect } from 'react';

import ModalCreate from '../components/Modal/ModalCreate';
import Card from '../components/Card_courses';
import { useState } from 'react';
import firebase, { firestore, storage } from '../helpers/firebase';

const Courses = () => {
  const uid = firebase.auth().currentUser.uid;
  const [fullName, setFullName] = useState('');
  const [description, setDescription] = useState('');
  const [img_pub, setImg_pub] = useState('');
  const [date, setDate] = useState('');
  const [initialInstance, setInitialInstance] = useState(firestore.collection('users').doc(`user_${uid}`).collection('courses'));
  const [getCoursesInstance, setGetCourses] = useState([]);

  function openModal() {
    document.querySelector('.modal').classList.remove('notVisible');
    document.querySelector('.modal').classList.add('Visible');
  }
  function handleChange(e) {
    const event = e.target;
    const name = event.name;
    const value = event.value;
    switch(name) {
      case 'fullName':
        setFullName(value);
      break;
      case 'description':
        setDescription(value);
      break;
      case 'imgCourse':
        const files = e.target.files[0];
        const arrengementValue = value.replace(/^.*\\/, "");
        const ref = `imgCourses/user_${uid}/${arrengementValue}`;
        const refStorage = storage.ref(ref);
        const task = refStorage.put(files);
        task.on('state_changed', (snapshot) => {
          const porcent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          const $loadingBar = document.querySelector('.progress_data--info');
          $loadingBar.style = `width: ${porcent}%`;
        },
        (err) => {
          console.error(err.message);
        },
        () => {
          console.log('Creada img');
          setImg_pub(ref);
        });
      break;
      case 'datePub':
        setDate(value);
      default:
        return null;
    }
  }
  async function handleCreate(e) {
    e.preventDefault();
    try {
      await initialInstance.add({
        fullName,
        description,
        date,
        imgCourse: img_pub,
      });
      console.log('Document writed with id: x');
    } catch (e) {
      console.error(e);
    }
  }
  function getCourses() {
    return initialInstance.onSnapshot((querySnapShot) => {
      const data = [];
      querySnapShot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setGetCourses(data);
    });
  }
  useEffect(() => {
    getCourses();
    return () => {
      document.querySelector('.modal').classList.add('notVisible');
      document.querySelector('.modal').classList.remove('Visible');
    }
  }, []);
  return (
    <section className="Courses" id="courses">
      <ModalCreate title="Crear curso" handleCreate={handleCreate}>
        <label htmlFor="fullName">
          Nombre:
          <input required onChange={handleChange} className="input" type="text" id="fullName" name="fullName"/>
        </label>
        <label htmlFor="description">
          Descripción:
          <textarea required onChange={handleChange} className="textarea" type="text" id="description" name="description"/>
        </label>
        <label htmlFor="datePub">
          Comienzo con el estudio:
          <input required onChange={handleChange} className="input" type="date" id="datePub" name="datePub"/>
        </label>
        <label htmlFor="imgCourse">
          Imagen:
          <input required onChange={handleChange} className="input" type="file" id="imgCourse" name="imgCourse"/>
          <div className="progress_data">
            <div className="progress_data--info"></div>
          </div>
        </label>
        <label htmlFor="pub">
          Publicaciones:
          <ul className="list__checks">
            <li className="list__checks--item">
              <input type="checkbox" id="pub" name="pub"/>
              Continúen en el amor de Dios
            </li>
            <li className="list__checks--item">
              <input type="checkbox" id="pub" name="pub"/>
              Nos enseña
            </li>
            <li className="list__checks--item">
              <input type="text" id="pub" name="pub" placeholder="Otra" />
            </li>
          </ul>
        </label>
        <input className="btn success" type="submit" value="Aceptar"/>
      </ModalCreate>
      <h1 className="h1_title"><strong><i className="fas fa-users"></i> Courses</strong></h1>
      <div className="Courses_content">
        <button className="add_course" onClick={openModal}><i className="fas fa-plus"></i></button>
      </div>
      <div className="container">
        {
          getCoursesInstance.map((course) => (
            <Card
              key={course.id}
              fullName={course.fullName}
              description={course.description}
              img={course.imgCourse}
              link={course.id}
              date={course.date}
              />
          ))
        }
      </div>
    </section>
  );
}

export default Courses;
