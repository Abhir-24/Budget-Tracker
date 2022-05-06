import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <Provider>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root'),
);
