import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "animate.css/animate.min.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas)

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
