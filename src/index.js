import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import cookie from 'react-cookies';
import { StateProvider } from './state/statecontext';
import { codes } from './store/codes';
import { authentication } from './store/authentication'

const initialState = {
    user: { id: cookie.load('userId'), second: 'test'},
    codes: [{ id: 'lfy5g2wt', project: 'Thruster Analysis', type: 'Clerical', description: 'Documentation of Thruster Checks'},
            { id: '9qy5gp2f', project: 'Thruster Refinements', type: 'Engineering', description: 'Thruster Tune-Ups'},
            { id: 'npif0v8d', project: 'Oxygen Production', type: 'Labor', description: 'Arranging Oxygen-Producing plants to optimal locations based on dynamic key factors'},
            { id: 'qmv7d99u', project: 'Oxygen Production', type: 'Research', description: 'Experimental Gene Editing'},
            { id: '0okdm25n', project: 'Oxygen Production', type: 'Clerical', description: 'Documentation of Oxygen Production levels and key factors'},
        ],
    isAddTrackingOpen: false
}

const reducerSwitch = {
    "Codes": codes,
    "Auth": authentication
}

const reducers = (state, action) => {
    return reducerSwitch[action.module](state, action)
}

ReactDOM.render(<StateProvider initialState={initialState} reducer={reducers}><App /></StateProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
