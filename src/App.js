import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login.jsx';
import { AuthProvider } from './components/Auth.jsx';
import PrivateRoutes from './components/PrivateRoutes.jsx';

import Animation from './components/Animation.jsx';
import Profile from './pages/Profile.jsx';
import Courses from './pages/Courses';
import Home from './pages/Home';
import './css/index.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter forceRefresh={false}>
        <Switch>
          <Route exact path="/signin">
            <Login></Login>
          </Route>
          <PrivateRoutes component={() => <Home>
            <PrivateRoutes
              exact
              path="/"
              component={(props) => <Profile
              // selectedPage={props.history.location.state.selectedPage}
              />}></PrivateRoutes>
            <PrivateRoutes
              exact
              path="/courses"
              component={(props) => <Courses
              // selectedPage={props.location.state.selectedPage}
              />}></PrivateRoutes>
            <PrivateRoutes
              path="/an"
              component={() => <Animation />} />
          </Home>} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
