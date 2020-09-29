import React from "react";
import Styles from './styles.module.scss'


export const Authorization = () => {
    return (
        <section className={`${Styles.container}`}>
                <a href="/" className={`${Styles.signIn}`}>
                    sign in
                </a>
        </section>
    );
};

export default Authorization;