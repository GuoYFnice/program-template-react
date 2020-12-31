import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './Layouts/Home';



if (module && module.hot) {
  module.hot.accept();
}


ReactDOM.render(<Home />, document.getElementById('root'));
