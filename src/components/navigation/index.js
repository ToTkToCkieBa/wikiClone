import React from "react";
import Styles from './styles.module.scss'

export const Navigation = () => {
    return (
        <section className={`${Styles.container}`}>
            <button className={`${Styles.buttonWrap}`}>
                <div className={`${Styles.line}`}/>
                <div className={`${Styles.line}`}/>
            </button>
        </section>
    );
};

export default Navigation;