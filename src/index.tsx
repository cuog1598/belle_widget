import React from "react";
import ReactDOM from "react-dom";
import Easi from "./easi";
import reportWebVitals from "./reportWebVitals";

const WidgetDivs = document.querySelectorAll(".easi-widget");

// Inject our React App into each
WidgetDivs.forEach((Div) => {
  ReactDOM.render(
    <React.StrictMode>
      <Easi domElement={Div} />
    </React.StrictMode>,
    Div
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
