import React from "react";
import Styles from './styles.module.scss'

export const Logo = () => {
    return (
        <section className={`${Styles.container}`}>
            <a href="/" className={`${Styles.logo}`}>
                wikipedia
            </a>
        </section>
    );
};

export default Logo;