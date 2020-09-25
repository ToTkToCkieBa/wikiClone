import React from 'react';
import Styles from './styles.module.scss'
const wikiclone = "Andrey"
console.log(wikiclone);


export const TestComponent = () => {
    return (
        <section className={`${Styles.container}`}>
            Test Component
        </section>
    );
};

export default TestComponent;