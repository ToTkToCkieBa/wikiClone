import React from "react";
import Styles from './styles.module.scss'
import { Html5Entities } from 'html-entities';

// eslint-disable-next-line import/no-absolute-path
import microphone from '/wiki/wiki/src/theme/assets/svg/microphone.svg';
// eslint-disable-next-line import/no-absolute-path
import keyboard from '/wiki/wiki/src/theme/assets/svg/keyboard.svg';



export const Search = () => {
    const microIcon = microphone;
    const keyboardIcon = keyboard

    const entities = new Html5Entities();
    return (
        <section className={`${Styles.container}`}>
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
            />
            <div className={`${Styles.note}`}>
                Type what you are looking for...
            </div>
        </section>
    );
};

export default Search;