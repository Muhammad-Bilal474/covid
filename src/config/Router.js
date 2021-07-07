import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import Home from "../component/Home"

  function AppRouter(){
      return(
          <Router>
              <Switch>
                  <Route exact path="/" component={Home}></Route>
                 
              </Switch>
          </Router>
      )
  }


  export default AppRouter;
  
