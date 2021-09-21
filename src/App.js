import React from "react";
import Main from './pages/Main/Main';
import PostFull from "./pages/PostFull/PostFull";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Test from "./pages/Test/Test";

class App extends React.Component{
    NotFoundPage;
    constructor(props ) {
        super(props);
    }

  render(){
    return (
      <>
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/PostFull/:id" exact component={PostFull} />
            <Route path="/test" exact component={Test}/>
            <Route component={this.NotFoundPage}/>
            </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;