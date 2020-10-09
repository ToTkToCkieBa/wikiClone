import React from "react";
import Styles from './styles.module.scss'
import Navigation from "../../components/navigation";
import Search from "../../components/search";
import Logo from "../../components/logo";
import SmallCircle from "../../components/_UI/smallCircle";
import InfoBox from "../../components/infoBox";
import GeneralContent from "../../components/generalContent";
import CategoriesContent from "../../components/categoriesContent";
import Authorization from "../../components/authorization";
import Links from "../../components/links";
import History from "../../components/history";
import Gallery from "../../components/gallery";
import {connect} from "react-redux";

const ContentPage = (props) => {
    const {isOpen} = props;
    return (
        <section
            className={`${Styles.container}`}
            style={{overflow: `${isOpen ? 'hidden' : 'scroll'}`}}
        >
            <SmallCircle type="contentPage"/>
            <Search type="contentPage"/>
            <Navigation type="contentPage"/>
            <Logo type="contentPage"/>
            <Authorization type="contentPage"/>
            <InfoBox/>
            <GeneralContent/>
            <CategoriesContent/>
            <Links/>
            <History type="contentPage"/>
            <Gallery/>
        </section>
    );
};

const mapStateToProps = store => {
    return {
        isOpen: store.images.isOpen
    }
}

export default connect(mapStateToProps, null)(ContentPage)