import React from 'react';
import './App.css';
import Header from './Copmponents/Header/Header';
import Navbar from './Copmponents/Navbar/Navbar';
import Profile from './Copmponents/Profile/Profile';
import Dialogs from './Copmponents/Dialogs/Dialogs';
import News from './Copmponents/News/News';
import Music from './Copmponents/Music/Music';
import Settings from './Copmponents/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Copmponents/Sidebar/Sidebar';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch} />} />
            <Route path='/dialogs/*' element={<Dialogs
              dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>)
}

export default App;

