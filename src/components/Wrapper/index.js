import React from "react";
import "./style.css";

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>

//   <div className="headerStuff">
//<div className='row'>
//<h1 className='title'>Heroes List</h1>
//</div>
//<div className='row'>
//<h1 className='title'>Dont click the same Hero Twice</h1>
//</div>
//<div className='row'>
//<h1 className='score title'>Current Score {this.state.count} High Score {this.state.highSCore}</h1>
//</div>
//</div>


}

export default Wrapper;