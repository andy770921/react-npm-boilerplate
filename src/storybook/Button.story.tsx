import React from 'react';
import Button from '../components/Button';

export default {
    component: Button,
    title: 'Button',
};

export const Basic = () => <Button onClick={() => alert('alert')}>button for storybook demo</Button>;
