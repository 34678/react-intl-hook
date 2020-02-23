import * as React from "react";
import axios from 'axios'
let ContextOne = React.createContext();

let initialState = {
  local:'',
  messages:{}
};


async function getintl(dispatch){
    const res = await axios.get('http://multi-lang.yy.com/multiLangBig/m_girgir/newamature/en.json')
    initialState.messages = res.data.data
    dispatch({ type: "set-msg", payload: res.data.data });
}

let reducer = (state, action) => {
  switch (action.type) {
    case "set-msg":
      return { ...state, messages: action.payload };
    default:
      return { ...state, currentColor: action.payload };
  }
};

function ContextOneProvider(props) {
  // [A]
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };
  getintl(dispatch)
  // [B]
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;

// [C]
export { ContextOne, ContextOneProvider, ContextOneConsumer };