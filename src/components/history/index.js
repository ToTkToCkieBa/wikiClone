import React from "react";
import Styles from './styles.module.scss'
import Fade from "react-reveal/Fade";



export const History = () => {
    return (
        <section className={`${Styles.container}`}>
            <div className={`${Styles.title}`}>your history today</div>
            <Fade right>
                <div className={`${Styles.lastSearch}`}>
                    <a className={`${Styles.item}`} href="/">William Shakespeare</a>
                    <a className={`${Styles.item} ${Styles.desktopItem}`} href="/">Subfossil lemurs</a>
                    <a className={`${Styles.item}`} href="/">Nicaragua began protests</a>
                    <a className={`${Styles.item}`} href="/">...more</a>
                </div>
            </Fade>
        </section>
    );
};

export default History;