import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./pages/mainPage";
import ContentPage from "./pages/contentPage";
import './theme/scss/index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/details' component={ContentPage}/>
            </Switch>
        </Router>
    </Provider>,
  document.getElementById('root')
);

