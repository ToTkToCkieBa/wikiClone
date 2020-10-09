import React from "react";
import Styles from './styles.module.scss'
import {connect} from "react-redux";
import MainImage from "../mainImage";

export const InfoBox = (props) => {
    const {results} = props;
    return (
        <section className={`${Styles.container}`}>
            <MainImage/>
            {results ? Object.keys(results[0].infoboxes[0]).map((item, index) => {
                return (
                    <div className={`${Styles.itemWrap}`} key={index}>
                        <div className={`${Styles.itemTitle}`}>
                            {[item.replace(/_/g, ' ').charAt(0).toUpperCase()
                            + item.replace(/_/g, ' ').slice(1)]}
                        </div>
                        <div className={`${Styles.itemContent}`}>
                            {results[0].infoboxes[0][item].text}
                        </div>
                    </div>
                )
            }) : null}
        </section>
    )
};

const mapStateToProps = store => {
    return {
        results: store.content.getContentResults.sections
    }
}

export default connect(mapStateToProps, null)(InfoBox)

