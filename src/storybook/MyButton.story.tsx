import React from 'react';
import MyButton from '../components/MyButton';

export default {
    component: MyButton,
    title: 'MyButton',
};

export const Basic = () => <MyButton onClick={() => alert('alert!')}>button for storybook demo</MyButton>;
