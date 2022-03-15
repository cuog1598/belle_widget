/* eslint-disable react/function-component-definition */
import React from "react";
import logo from "./logo.svg";
// import "./App.css";

interface ComponentProps {
  domElement: Element;
}

type Props = ComponentProps;

const App: React.FC<Props> = ({ domElement }) => {
  // const subreddit = domElement.getAttribute("data-subreddit");

  return (
    <div className={"App"}>
      <header className={"App-header"}>
        <img src={logo} className={"App-logo"} alt={"logo"} />
        <p>
          {"Edit "}
          <code>{"src/App.tsx"}</code> {"and save to reload."}
        </p>
        <a
          className={"App-link"}
          href={"https://reactjs.org"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          {"Learn React"}
        </a>
      </header>
    </div>
  );
};

export default App;
