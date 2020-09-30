import React from "react";
import Styles from './styles.module.scss'
import {connect} from "react-redux";



export const SearchResult = (props) => {
    const {results} = props;

    const choiceHandler = (target) => {
        console.log(results[3][results[1].findIndex(i => i === target)])
    }

    return (
        results[1] ?
            <section className={`${Styles.container}`}>
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

// const mapDispatchToProps = dispatch => {
//     return {
//
//     }
// }

export default connect(mapStateToProps, null)(SearchResult)

