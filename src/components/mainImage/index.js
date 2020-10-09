import React from "react";
import Styles from './styles.module.scss'
import {connect} from "react-redux";
import MD5 from "crypto-js/md5"

export const MainImage = (props) => {
    const {url, caption} = props;

    return (
        <section className={`${Styles.container}`}>
            <img className={`${Styles.img}`} src={url} alt=""/>
            <div className={`${Styles.imgCaption}`}>{caption}</div>
        </section>
    )
};


const mapStateToProps = store => {
    const results = store.content.getContentResults.sections;

    // hard-codding due to raw api - create a image link

    if (results) {
        let imgName = results[0].infoboxes[0].image ? results[0].infoboxes[0].image.text.split(' ').join('_') :
            results[0].infoboxes[0][(Object.keys(results[0].infoboxes[0]).find(i => i.indexOf('image') + 1))].text.split(' ').join('_');
        const firstImageName = imgName;
        const hashSTR = MD5(imgName).toString().slice(0, 2);
        imgName = imgName.substr(imgName.length - 3) === "svg" ? `${imgName  }.png` : imgName;

        const url = `https://upload.wikimedia.org/wikipedia/commons/thumb/${hashSTR[0]}/${hashSTR.slice(0, 2)}/${firstImageName}/500px-${imgName}`;
        let caption = results[0].infoboxes[0].caption ? results[0].infoboxes[0].caption.text :
            results[0].infoboxes[0][(Object.keys(results[0].infoboxes[0]).find(i => i.indexOf('image') + 1))].text;
        caption = caption.slice(0, caption.indexOf('.'));
        return {
            url,
            caption
        }
    }
    return {
        url: "",
        caption: ""
    }

}


export default connect(mapStateToProps, null)(MainImage);