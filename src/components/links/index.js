import React from "react";
import Styles from './styles.module.scss'
import { Html5Entities } from 'html-entities';

export const Links = () => {
    const entities = new Html5Entities();

    return (
        <section className={`${Styles.container}`}>
            <div className={`${Styles.languageSwitcher}`}>
                <a href="/">main version on english</a>
                <div>or</div>
                <a href="/">
                    choose your language
                    <span className={`${Styles.searchArrow}`}>{entities.decode('&#8249')}</span>
                </a>
            </div>
            <a href="/">mobile view</a>
            <a href="/">classic wikipedia</a>
        </section>
    );
};

export default Links;