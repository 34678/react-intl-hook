import React from 'react';
import { ContextOne} from "../hook/useIntel";
// import { ContextOneConsumer ,ContextOne} from "../hook/useIntel";
function Header(){
    const {state} = React.useContext(ContextOne)
    // 用法2 
    // const { state } = React.useContext(ContextOne);
    return (
        <React.Fragment>
            {/* 用法1 */}
            {state.messages.title}
            {/* <ContextOneConsumer>
                {(value) => value.state.messages.title}
            </ContextOneConsumer> */}
        </React.Fragment>
    )
}
export default Header