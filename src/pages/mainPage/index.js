import React from "react";
import Styles from './styles.module.scss'
import Fade from "react-reveal/Fade";
import Search from "../../components/search";
import History from "../../components/history";
import Navigation from "../../components/navigation";
import Logo from "../../components/logo";
import Authorization from "../../components/authorization";
import Links from "../../components/links";

export const MainPage = () => {
    return (
        <section className={`${Styles.container}`}>
            <Fade top>
                <div className={`${Styles.whiteCircle}`}/>
            </Fade>
            <div className={`${Styles.largeCircle}`}/>
            <Navigation/>
            <Logo/>
            <Authorization/>
            <Search/>
            <Links/>
            <History/>
        </section>
    );
};

export default MainPage;