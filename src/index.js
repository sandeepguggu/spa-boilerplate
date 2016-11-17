import React from 'react';
import { render } from 'react-dom';

const yarnImg = require('../images/yarn.jpg');

import './base.scss';
render(
  <span>
    <img src={yarnImg} />
  </span>,
  document.querySelector('#root')
);
