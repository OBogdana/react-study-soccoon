import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderPage = () => {

    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>
    );
}

rerenderPage(store.getState());

store.subscribe(rerenderPage);



