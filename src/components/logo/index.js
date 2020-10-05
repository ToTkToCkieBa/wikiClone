import React from "react";
import Styles from './styles.module.scss'
import PropTypes from "prop-types";

export const Logo = (props) => {
    const {type} = props;

    return (
        <section className={`${Styles.container} ${type === 'mainPage' ? Styles.mainPage : Styles.contentPage}`}>
            <a href="/" className={`${Styles.logo}`}>
                wikipedia
            </a>
        </section>
    );
};

export default Logo;

Logo.propTypes = {
    type: PropTypes.oneOf(['mainPage', 'contentPage']).isRequired
};