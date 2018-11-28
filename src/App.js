import React, { Component } from 'react';
import Header from "./components/header/header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login/login";
import Writer from "./pages/writer/loadable";
import RecommendWriter from "./pages/recommendwirter/loadable";


class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/detail/:id" component={Detail}></Route>
              <Route path="/login" component={Login} />
              <Route path="/writer" component={Writer} />
              <Route path="/rwriter" component={RecommendWriter} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
