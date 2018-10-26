import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

//estilos
import './Navigation.css';

const Navigation = ({ authUser }) =>  
    <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
    </AuthUserContext.Consumer>
  

const NavigationAuth = () =>
    <div className="container caja-nav">
      <div className="row align-items-center">
      <div className="col">  
      <button className="btn btn-lg botones-panel"><Link className="prueba" to={routes.HOME}>Panel</Link></button>
      </div>
      <div className="col">
      <button className="btn btn-lg botones"><Link className="prueba" to={routes.ACCOUNT}>Usuario</Link></button>
      </div>
      <SignOutButton />
      </div>
    </div>


const NavigationNonAuth = () =>
  <div className="caja-login-nav">
  <button className="btn btn-block caja-login-nav"><Link className="prueba" to={routes.SIGN_IN}>Inicia Sesión</Link></button>
  </div>

export default Navigation;