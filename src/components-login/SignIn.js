import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { auth } from '../firebase';
import * as routes from '../constants/routes';

// estilos
import './SignIn.css';

const SignInPage = ({ history }) =>
  <div className="row justify-content-center bienvenida">
    <h6>Ingresa tus datos para comenzar el día</h6>  
    <SignInForm history={history} />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className="container">
        <section className="row justify-content-center">                
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input className="form-control input-lg"
                value={email}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                type="text"
                placeholder="Email"/>
            </div>
            <div className="form-group">
              <input className="form-control input-lg"
                value={password}
                onChange={event => this.setState(byPropKey('password', event.target.value))}
                type="password"
                placeholder="Contraseña"/>
            </div>
            <div className="form-group">
              <button className="btn boton-iniciar" disabled={isInvalid} type="submit">
                Iniciar
              </button>
            { error && <p>Datos incorrectos*</p> }
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};