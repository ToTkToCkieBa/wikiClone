import React from "react";
import Styles from './styles.module.scss'
import {connect} from "react-redux";
import {Images} from "../images";

export const CategoriesContent = (props) => {
    const {results} = props;
    console.log(results);
    return (
        <section className={`${Styles.container}`}>
            {
                // eslint-disable-next-line array-callback-return
                results ? results.map(item => {
                    if (item.title === '') {
                        return null
                    }
                    if (item.depth === 1) {
                        if (item.paragraphs){
                            return (
                                <div>
                                    <div className={`${Styles.itemTitle}`}>{item.title}</div>
                                    <Images images={item.images}/>
                                    {/* eslint-disable-next-line array-callback-return */}
                                    {item.paragraphs.map((paragraph2, index) => {
                                        if (paragraph2.sentences) {
                                            if (paragraph2.sentences.length > 0) {
                                                let pContent = '';
                                                // eslint-disable-next-line array-callback-return
                                                paragraph2.sentences.map(i =>{
                                                    pContent += `${i.text  } `
                                                })
                                                return (
                                                    <div key={index}>
                                                        <div className={`${Styles.itemText}`}>
                                                            {pContent}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                    })}
                                </div>
                            )
                        }
                    }
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


export default connect(mapStateToProps, null)(CategoriesContent);