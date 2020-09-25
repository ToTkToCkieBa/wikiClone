import React from "react";
import Styles from './styles.module.scss'

import TestComponent from "../../components/testComponent";

export const MainPage = () => {

    return (
        <section className={`${Styles.container}`}>
            <TestComponent/>
        </section>
    );
};

export default MainPage;