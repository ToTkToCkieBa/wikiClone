import React from "react";
import Styles from './styles.module.scss'
import {connect} from "react-redux";
import {closeGallery, nextImage, prevImage} from "../../store/images/action";

const Gallery = (props) => {
    const {
        galleryLength,
        currentImg,
        onCloseGallery,
        onNextImage,
        onPrevImage,
        isOpen
    } = props;

    return (
        currentImg ?
            <section className={`${Styles.container}`} style={{
                display: `${isOpen ? 'grid' : 'none'}`
            }}>

                <div className={`${Styles.close}`} onClick={() => onCloseGallery()}>
                    <div className={`${Styles.item} ${Styles.item1}`}/>
                    <div className={`${Styles.item} ${Styles.item2}`}/>
                </div>
                <div
                    className={`${Styles.leftArrow}`}
                    onClick={() => {
                        onPrevImage(+currentImg.id === 1 ? `${galleryLength}` : `${currentImg.id - 1}`)
                    }}
                >
                    <div className={`${Styles.item} ${Styles.item1}`}/>
                    <div className={`${Styles.item} ${Styles.item2}`}/>
                </div>
                <div className={`${Styles.imageWrap}`}>
                    <div className={`${Styles.positionWrap}`}>
                        <div key={currentImg.url} className={`${Styles.img}`} style={{
                            backgroundImage: `url(${  currentImg.url.replace(/'/g, "\\'") })`
                        }}/>
                        <div className={`${Styles.caption}`}>{currentImg.caption}</div>
                    </div>
                </div>
                <div
                    className={`${Styles.rightArrow}`}
                    onClick={() => {
                        onNextImage(+currentImg.id === galleryLength ? '1' : `${+currentImg.id + 1}`)
                    }}
                >
                    <div className={`${Styles.item} ${Styles.item1}`}/>
                    <div className={`${Styles.item} ${Styles.item2}`}/>
                </div>
            </section>
            : null
    )
};

const mapStateToProps = store => {
    return {
        galleryLength: store.images.images.length,
        currentImg: store.images.images.find(item =>  item.id === store.images.currentImg),
        isOpen: store.images.isOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCloseGallery: () => dispatch(closeGallery()),
        onNextImage: (id) => dispatch(nextImage(id)),
        onPrevImage: (id) => dispatch(prevImage(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Gallery)