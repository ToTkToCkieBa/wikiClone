import React from "react";
import Styles from './styles.module.scss'
import {connect} from "react-redux";
import { getContent } from "../../store/content/action";
import { useHistory } from "react-router-dom";
import {clearSearchResults} from "../../store/search/action";

export const SearchResult = (props) => {
    const {
        results,
        onGetContentResults,
        onClearSearchResults,
        type
    } = props;

    const history = useHistory();

    const choiceHandler = (target) => {
        onGetContentResults(target);
        history.push('/details');
        onClearSearchResults();
    }

    return (
        results[1] ?
            <section className={`${Styles.container} ${type === 'mainPage' ? Styles.mainPage : Styles.contentPage}`}>
                {results[1].map((item, index)=>{
                    return (
                        <div
                            className={`${Styles.item}`}
                            key={index}
                            onClick={(e) => {choiceHandler(e.target.innerText)}}
                        >
                            {item}
                        </div>
                    )
                })}
            </section> : null
    );
};

const mapStateToProps = store => {
    return {
        results: store.search.searchResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetContentResults: url => dispatch(getContent(url)),
        onClearSearchResults: () => dispatch(clearSearchResults())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)

