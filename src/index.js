import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import divButtons from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(divButtons, document.getElementById('root'));

serviceWorker.unregister();
