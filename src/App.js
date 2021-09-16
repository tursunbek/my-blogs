import React from "react";
import Main from './pages/Main/Main';
import PostFull from "./pages/PostFull/PostFull";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component{
    constructor(props) {
        super(props);
        console.log(window.location.pathname)
    }
  render(){
    return (
      <>
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/PostFull" exact component={PostFull} />
        </BrowserRouter>
      </>
    )
  }
}

export default App;