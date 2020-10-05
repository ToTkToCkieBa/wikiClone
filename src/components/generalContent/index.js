import React from "react";
import Styles from './styles.module.scss'
import {connect} from "react-redux";

export const GeneralContent = (props) => {
    const {results} = props;
    console.log(results);
    return (
        <section className={`${Styles.container}`}>
            {
                results ? results[0].paragraphs.map((item, index) =>{
                    let pContent = '';
                    // eslint-disable-next-line array-callback-return
                    item.sentences.map(i =>{
                        pContent += `${i.text  } `
                    })
                    return (
                        <div className={`${Styles.paragraph}`} key={index}>
                            <span className={`${Styles.firstLetter}`}>{pContent.charAt(0).toUpperCase()}</span>
                            {pContent.slice(1)}
                        </div>
                    )
                }) : null
            }
        </section>
    )
};

const mapStateToProps = store => {
    return {
        results: store.content.getContentResults.sections
    }
}


export default connect(mapStateToProps, null)(GeneralContent)