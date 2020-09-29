import React from "react";
import Styles from './styles.module.scss'
import { Html5Entities } from 'html-entities';

export const Links = () => {
    const entities = new Html5Entities();

    return (
        <section className={`${Styles.container}`}>
            <div className={`${Styles.languageSwitcher}`}>
                <a className={`${Styles.item}`} href="/">main version on english</a>
                <div className={`${Styles.separator}`}>or</div>
                <a className={`${Styles.item}`} href="/">
                    choose your language
                    <span className={`${Styles.searchArrow}`}>{entities.decode('&#8249')}</span>
                </a>
            </div>
            <div className={`${Styles.otherLinks}`}>
                <a  className={`${Styles.item}`} href="/">mobile view</a>
                <a className={`${Styles.item}`} href="/"><span>classic wikipedia</span></a>
            </div>
        </section>
    );
};

export default Links;