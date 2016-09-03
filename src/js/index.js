import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Responsive } from 'react-plan';
import App from './App/App.jsx';
import '../style/index.less';

render(<AppContainer><Responsive><App /></Responsive></AppContainer>, document.getElementById('root'));

if(module.hot) {
  module.hot.accept('./App/App.jsx', () => {
    const App = require('./App/App.jsx').default;
    render(<AppContainer><Responsive><App /></Responsive></AppContainer>, document.getElementById('root'));
  });
}