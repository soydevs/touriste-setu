import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeContext } from './context/ThemeContext';
import './App.css';
import PrivateRoute from './utils/PrivateRoute'
import { Login, SignUp, TouristLogin, TouristSignup, GuideLogin, GuideSignup, EventReg } from './components';
import { FourNotFour, HomePage, ProfilePage, LandingPage, PlacePage, PlanPage, ConnectPage, ConnectProfilePage } from './pages'

function App() {

  const { theme } = useContext(ThemeContext)

    return (
      <div className="app" data-theme={theme}>
        <Router>
          <Switch>
            <Route path='/login' component={Login} exact/>
            <Route path='/signup' component={SignUp} exact/>
            <Route path='/' component={LandingPage} exact/>
            <PrivateRoute path='/home' component={HomePage} exact/>
            <PrivateRoute path='/plan' component={PlanPage} exact/>
            <PrivateRoute path='/connect' component={ConnectPage} exact/>
            <PrivateRoute path='/connect/:id' component={ConnectProfilePage} exact/>
            <PrivateRoute path='/places/:place' component={PlacePage} exact/>
            <PrivateRoute path='/profile' exact component={ProfilePage}/>

            <Route path='/service/login' component={TouristLogin} exact/>
            <Route path='/service/signup' component={TouristSignup} exact/>
            <Route path='/events/registration' component={EventReg} exact/>

            <Route path='/guide/login' component={GuideLogin} exact/>
            <Route path='/guide/signup' component={GuideSignup} exact/>


            <Route component={FourNotFour} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
