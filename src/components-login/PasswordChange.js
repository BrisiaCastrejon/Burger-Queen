import React, { Component } from 'react';

import { auth } from '../firebase';
//estilos
import './PasswordChange.css'

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input className="form-control-lg"
              value={passwordOne}
              onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
              type="password"
              placeholder="Nueva Contraseña"/>
            </div>
            <div className="form-group">
            <input className="form-control-lg"
              value={passwordTwo}
              onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
              type="password"
              placeholder="Confirmación"/>
            </div>
            <div className="form-group">
            <button className="btn tbn-lg cambiar" disabled={isInvalid} type="submit">
              Cambiar contraseña
            </button>
            </div>

          { error && <p>La contraseña o los datos son inválidos</p> }
        </form>
      </div>
    );
  }
}

export default PasswordChangeForm;