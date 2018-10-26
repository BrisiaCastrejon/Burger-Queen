import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
//estilos
import './SignUp.css'

const SignUpPage = ({ history }) =>
  <div>
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};
const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };

  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
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
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';
    
    return (
      <div className="container SingUp-formulario">
        <section className="row	justify-content-center ">
        <form className="" onSubmit={this.onSubmit}>
          <div className="form-group">
          <input className="form-control input-lg"
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Nombre completo"/>
        </div>
        <div className="form-group">
        <input className="form-control input-lg"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email"/>
        </div>
        <div className="form-group">
        <input className="form-control input-lg"
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Contraseña"/>
        </div>
        <div className="form-group">
        <input className="form-control input-lg"
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirmación"/>
        </div>
        <div className="form-group">
        <button className="btn btn-block boton" disabled={isInvalid} type="submit">
          Crear
        </button>
        { error && <p>La contraseña o los datos no son válidos</p> }     
        </div>
      </form>
      </section>
      </div>
    );
  }
  
}

const SignUpLink = () =>
  <p>
    Crea una cuenta nueva
    {' '}
    <Link className="aqui" to={routes.SIGN_UP}>Aquí</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};