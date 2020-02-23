import * as React from "react";
import { getMessages } from "./util";
let ContextOne = React.createContext();


let initialState = {
  local: "",
  messages: {}
};
/**
 * 
 * @param {*} dispatch context的reducer对应的dispath方法
 * @param {*} moduleMap 路径和使用多语言模块的对应
 * @param {*} pathname 路径
 * @param {*} i18nproject 大的多语言项目
 * @param {*} locale 使用语言
 */
async function getintl(
  dispatch,
  moduleMap,
  pathname = "",
  i18nproject = "",
  locale = "zh"
) {
  debugger
  const data = await getMessages(moduleMap, pathname, i18nproject, locale);
  dispatch({ type: "set-msg", payload: data });
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
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;

export { ContextOne, ContextOneProvider, ContextOneConsumer, getintl };
