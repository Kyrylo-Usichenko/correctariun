import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {Provider} from "react-redux";
import {compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";


const composeEnhancers =
    typeof window === 'object' &&
    // @ts-ignore
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ?
        // @ts-ignore
        window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({}) : compose;

const store = createStore(rootReducer, composeEnhancers)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

