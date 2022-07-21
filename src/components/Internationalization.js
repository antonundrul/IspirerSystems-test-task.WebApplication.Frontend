import logo from '../logo.svg';
import '../App.css';
import {FormattedDate, FormattedMessage, IntlProvider} from "react-intl";
import Wrapper, {Context} from "../components/Wrapper";
import React, {useContext} from "react";
import Russian from "../lang/ru.json";



let Internationalization = (props) => {
    const context = useContext(Context);
    return(
         <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select value = {context.locale} onChange={context.selectLanguage}>
            <option value= 'ru'>Russian</option>
            <option value= 'en'>English</option>
        </select>
        <p>
          <FormattedMessage
              id = "app.label"
              defaultMessage="Edit the files and save to reload"
              values = {{fileName: 'src/App.js', code: (word)=> <strong>{word}</strong>}}
          />
        </p>

        <button
          className="App-link"
          onClick={()=>alert("message")}>
          <FormattedMessage
              id = "app.content"
              defaultMessage="Learn React"
          />

        </button>

      </header>
    </div>
    )
}

export default Internationalization