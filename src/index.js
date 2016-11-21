import React from 'react';
import { render } from 'react-dom';
import 'utils/api';

const bulbSVG = require('images/bulb.svg?raw=true');
import './base.scss';
render(
  <span dangerouslySetInnerHTML={{__html: bulbSVG}} />,
  document.querySelector('#root')
);
