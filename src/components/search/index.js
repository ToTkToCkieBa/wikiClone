import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {search, clearSearchResults} from "../../store/search/action";
import Styles from './styles.module.scss'
import { Html5Entities } from 'html-entities';
import microphone from '/wiki/wiki/src/theme/assets/svg/microphone.svg';
import keyboard from '/wiki/wiki/src/theme/assets/svg/keyboard.svg';
import SearchResult from "../searchResult";

export const Search = (props) => {
    const {
        onSearch,
        onClearSearchResults,
        results,
        type
    } = props;

    const microIcon = microphone;
    const keyboardIcon = keyboard

    const searchHandler = (value) => {
        // create search endpoint

        if (value.length > 2){
            let url = "https://en.wikipedia.org/w/api.php";

            const params = {
                action: "opensearch",
                search: value,
                limit: "5",
                namespace: "0",
                format: "json"
            };

            url = `${url  }?origin=*`;
            Object.keys(params).forEach(function(key){url += `&${  key  }=${  params[key]}`;});

            onSearch(url);
        } else if (results){
            if (results[1]){
                onClearSearchResults();
            }
        }
    }

    const entities = new Html5Entities();
    return (
        <section className={`${Styles.container} ${type === 'mainPage' ? Styles.mainPage : Styles.contentPage}`}>
          <div className={`${Styles.searchNav}`}>
              <div className={`${Styles.searchLangWrap}`}>
                  english
                  <span className={`${Styles.searchArrow}`}>{entities.decode('&#8249')}</span>
              </div>
              <div className={`${Styles.searchEnterOptionsWrap}`}>
                  <img className={`${Styles.icon}`} src={microIcon} alt="microphone"/>
                  <img className={`${Styles.icon}`} src={keyboardIcon} alt="microphone"/>
              </div>
          </div>
            <input
                className={`${Styles.input}`}
                type="text"
                placeholder="Search"
                onChange={(e) => {
                    searchHandler(e.target.value)
                }}
            />
            <div className={`${Styles.note}`}>
                Type what you are looking for...
            </div>
            <SearchResult type={type}/>
        </section>
    );
};

const mapStateToProps = store => {
    return {
        results: store.search.searchResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: url => dispatch(search(url)),
        onClearSearchResults: () => dispatch(clearSearchResults())
    }
}

Search.propTypes = {
    type: PropTypes.oneOf(['mainPage', 'contentPage']).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Search)

