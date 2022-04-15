import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Account, NetworkType } from "symbol-sdk";

function App() {
  const account = Account.generateNewAccount(NetworkType.TEST_NET);
  console.log(
    "Your new account address is:",
    account.address.pretty(),
    "and its private key",
    account.privateKey
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
