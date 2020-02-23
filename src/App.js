import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ContextOne } from "./hook/useIntel";
import Header from './component/header'


function App() {
  // [A]
  let { state } = React.useContext(ContextOne);

  console.log('messages',state.messages);
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        {/* {state.messages} */}
        <Header/>
      </div>
    </React.Fragment>
  );
}

export default App;
