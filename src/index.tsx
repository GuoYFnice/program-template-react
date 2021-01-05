import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Home from './Layouts/Home';



// if (module && module.hot) {
//   module.hot.accept();
// }

// querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。
ReactDOM.render(<Home />, document.querySelector('#root'));
