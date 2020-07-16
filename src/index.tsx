import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';

export { default as Button } from './components/Button';

if (process.env.MODE === 'DEV') {
    ReactDOM.render(<Button>rendered button for dev</Button>, document.querySelector('#root'));
}
