import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Russian from "./lang/ru.json"
import English from "./lang/en.json"
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from "react-intl";
import App from "./App";
import Wrapper from "./components/Wrapper";

const locale = navigator.language
let lang;
if (locale === "en") {
    lang = English
} else {
    lang = Russian
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <IntlProvider locale={locale} messages={Russian}>
        <Wrapper>
            <App/>
        </Wrapper>
    </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
