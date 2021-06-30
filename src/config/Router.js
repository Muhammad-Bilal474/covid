import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from "../component/Home"
  import About from "../component/About"

  function AppRouter(){
      return(
          <Router>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/about" component={About}></Route>
              </Switch>
          </Router>
      )
  }


  export default AppRouter;
  
