import React from "react";
import Styles from './styles.module.scss'

export const Authorization = (props) => {
    const {type} = props;
    return (
        <section className={`${Styles.container} ${type === 'mainPage' ? Styles.mainPage : Styles.contentPage}`}>
                <a href="/" className={`${Styles.signIn}`}>
                    sign in
                </a>
        </section>
    );
};

export default Authorization;