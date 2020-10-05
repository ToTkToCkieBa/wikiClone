import React from "react";
import Styles from './styles.module.scss'
import Navigation from "../../components/navigation";
import Search from "../../components/search";
import Logo from "../../components/logo";
import SmallCircle from "../../components/_UI/smallCircle";
import InfoBox from "../../components/infoBox";
import GeneralContent from "../../components/generalContent";

export const ContentPage = () => {
    return (
        <section className={`${Styles.container}`}>
            <SmallCircle type="contentPage"/>
            <Search type="contentPage"/>
            <Navigation type="contentPage"/>
            <Logo type="contentPage"/>
            <InfoBox/>
            <GeneralContent/>
        </section>
    );
};

export default ContentPage;