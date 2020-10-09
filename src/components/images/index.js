import React from "react";
import Styles from './styles.module.scss';
import {connect} from "react-redux";
import {addNewImg, openGallery} from "../../store/images/action";
import uniqueId from 'lodash/uniqueId';

const Images = (props) => {
    const {
        images,
        onAddNewImg,
        onOpenGallery
    } = props;

    return (
        images ?
            <div className={`${Styles.container}`} >
                {
                    images.map((item, index) =>{
                        if (item.thumb && item.caption){
                            const id = uniqueId();
                            onAddNewImg({
                                id,
                                url: item.thumb,
                                caption: item.caption
                            })
                            return (
                                <div className={`${Styles.imgWrap}`} key={index} id={id} onClick={e => {
                                    onOpenGallery({
                                        id: e.target.id,
                                        posY: window.pageYOffset
                                    });
                                }}>
                                    <img className={`${Styles.img}`} src={item.thumb} alt={item.caption} id={id}/>
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

const mapDispatchToProps = dispatch => {
    return {
        onAddNewImg: img => dispatch(addNewImg(img)),
        onOpenGallery: (id) => dispatch(openGallery(id))
    }
}

export default connect(null, mapDispatchToProps)(Images);