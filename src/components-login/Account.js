import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

// estilos
import './Account.css'


const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div className="container caja-restablecer">
        <div className="row justify-content-center">
          <div className="col-md-5">
          <h3>Cuenta actual: {authUser.email}</h3>
          <PasswordForgetForm />
          </div >
          <div className="col-md-5">
          <PasswordChangeForm />
          </div>
        </div>
      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);