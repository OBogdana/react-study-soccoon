import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-content-box'>
                <Routes>
                    <Route path='/profile' element={<Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}/>}/>
                    <Route path='/messages' element={<Messages
                        messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;

//Test commit