import React from "react";
import Styles from './styles.module.scss'
import Fade from "react-reveal/Fade";
import Search from "../../components/search";
import History from "../../components/history";
import Navigation from "../../components/navigation";
import Logo from "../../components/logo";
import Authorization from "../../components/authorization";
import Links from "../../components/links";
import SmallCircle from "../../components/_UI/smallCircle";

export const MainPage = () => {
    return (
        <section className={`${Styles.container}`}>
            <Fade top>
                <SmallCircle type="mainPage"/>
            </Fade>
            <div className={`${Styles.largeCircle}`}/>
            <Navigation type="mainPage"/>
            <Logo type="mainPage"/>
            <Authorization/>
            <Search type="mainPage"/>
            <Links/>
            <History/>
        </section>
    );
};

export default MainPage;