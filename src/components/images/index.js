import React from "react";
import Styles from './styles.module.scss'
import {connect} from "react-redux";

export const Images = (props) => {
    const {images} = props;
    return (
        images ?
            <div className={`${Styles.container}`}>
                {
                    images.map((item, index) =>{
                        if (item.thumb){
                            return (
                                <div className={`${Styles.imgWrap}`} key={index}>
                                    <img className={`${Styles.img}`} src={item.thumb} alt={item.caption}/>
                                    <div className={`${Styles.imgCaption}`}>{item.caption}</div>
                                </div>
                            )
                        } 
                            return null
                    })
                }
            </div> : null
    )
};

// const mapStateToProps = store => {
//     return {
//         results: store.content.getContentResults.sections
//     }
// }


export default connect(null, null)(Images);