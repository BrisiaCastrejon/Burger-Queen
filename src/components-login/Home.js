import React from 'react';

import withAuthorization from './withAuthorization';
// estilos 
import './Home.css';

// componentes
import Board from './../components-panel/Board'
import Menu from './../components-panel/Menu';

const HomePage = () =>
  <div className="container">
  <div className="row">
    <div className="col-md-8">
    <Menu />
    </div>
    <div className="col-md-4">
    <Board />
    </div>
    </div>
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);