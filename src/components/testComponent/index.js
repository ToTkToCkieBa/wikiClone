import React from 'react';
import Styles from './styles.module.scss'

export const TestComponent = () => {
    return (
        <section className={`${Styles.container}`}>
            Test Component
        </section>
    );
};

export default TestComponent;