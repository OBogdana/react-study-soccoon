import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

// dispatch={store.dispatch.bind(store)}
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderPage = () => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>

        </React.StrictMode>
    );
}

rerenderPage(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderPage(state);
});



