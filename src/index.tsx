import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './components/button/MyButton';

export { default as MyButton } from './components/button/MyButton';

if (process.env.MODE === 'DEV') {
    ReactDOM.render(<MyButton>rendered button for dev</MyButton>, document.querySelector('#root'));
}
