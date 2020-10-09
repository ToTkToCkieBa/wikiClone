import React from "react";
import Styles from './styles.module.scss'
import {connect} from "react-redux";
import Images from "../images";

export const CategoriesContent = (props) => {
    const {results} = props;
    return (
        <section className={`${Styles.container}`}>
            {
                // eslint-disable-next-line array-callback-return
                results ? results.map((item, index) => {
                    if (item.title === '') {
                        return null
                    }
                    if (item.depth === 0) {
                        if (item.title !== "") {
                            return (
                                <div className={`${Styles.categoriesWrap}`} key={index}>
                                    <div className={`${Styles.categoriesTitle}`}>{item.title}</div>
                                    <Images images={item.images}/>
                                    {
                                        // eslint-disable-next-line array-callback-return
                                        item.paragraphs ? item.paragraphs.map((paragraph1, index) => {
                                                if (paragraph1.sentences) {

                                                    if (paragraph1.sentences.length > 0) {
                                                        let pContent = '';
                                                        // eslint-disable-next-line array-callback-return
                                                        paragraph1.sentences.map(i => {
                                                            // pContent - new paragraph compiled from sentences

                                                            pContent += `${i.text} `
                                                        })
                                                        return (
                                                            <div className={`${Styles.categoriesText}`} key={index}>
                                                                {pContent}
                                                            </div>
                                                        )
                                                    }
                                                }
                                            }
                                        ) : null}
                                </div>
                            )
                        }
                    }
                    if (item.depth === 1) {
                        if (item.paragraphs) {
                            // categories rendering with paragraphs([{[]}])

                            return (
                                <div className={`${Styles.itemWrap}`} key={index}>
                                    <div className={`${Styles.itemTitle}`}>{item.title}</div>
                                    <Images images={item.images}/>
                                    {/* eslint-disable-next-line array-callback-return */}
                                    {item.paragraphs.map((paragraph2, index) => {
                                        if (paragraph2.sentences) {
                                            if (paragraph2.sentences.length > 0) {
                                                // pContent - new paragraph compiled from sentences

                                                let pContent = '';
                                                // eslint-disable-next-line array-callback-return
                                                paragraph2.sentences.map(i => {
                                                    pContent += `${i.text} `
                                                })
                                                return (
                                                    <div className={`${Styles.itemText}`} key={index}>
                                                        {pContent}
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