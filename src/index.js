import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/Index/Index';

const appRoot = document.createElement('div');
document.body.appendChild(appRoot);

ReactDOM.render(<Index />, appRoot);
