import React from "react";
import Styles from './styles.module.scss'
import PropTypes from "prop-types";

export const SmallCircle = (props) => {
    const {type} = props;

    return (
        <section className={`${Styles.container} ${type === 'mainPage' ? Styles.mainPage : Styles.contentPage}`}/>
    );
};

export default SmallCircle;

SmallCircle.propTypes = {
    type: PropTypes.oneOf(['mainPage', 'contentPage']).isRequired
};