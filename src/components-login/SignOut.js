import React from 'react';

import { auth } from '../firebase';
//estilos
import './SignOut.css'

const SignOutButton = () =>
  <button className="btn btn-lg boton-cerrar"
    type="button"
    onClick={auth.doSignOut}>
    Cerrar
  </button>

export default SignOutButton;