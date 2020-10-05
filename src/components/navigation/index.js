import React from "react";
import Styles from './styles.module.scss'
import PropTypes from "prop-types";

export const Navigation = (props) => {
    const {type} = props;
    return (
        <section className={`${Styles.container}  ${type === 'mainPage' ? Styles.mainPage : Styles.contentPage}`}>
            <button className={`${Styles.buttonWrap}`}>
                <div className={`${Styles.line}`}/>
                <div className={`${Styles.line}`}/>
            </button>
        </section>
    );
};

export default Navigation;

Navigation.propTypes = {
    type: PropTypes.oneOf(['mainPage', 'contentPage']).isRequired
};