import logo from './logo.svg';
import './App.css';
import {FormattedDate, FormattedMessage, IntlProvider} from "react-intl";
import Wrapper, {Context} from "./components/Wrapper";
import React, {useContext} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Russian from "./lang/ru.json";
import Internationalization from "./components/Internationalization";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Task1 from "./components/Task1";
import Users from "./components/Users";

function App(props) {

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/task1' element={<Task1/>}/>
              <Route path='/users' element={<Users />}/>
              <Route path='/internationalization' element={ <Internationalization />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>

  );
}

export default App;
