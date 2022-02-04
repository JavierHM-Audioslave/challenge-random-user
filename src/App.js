import React, {useEffect} from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./Helpers/history";
import {useDispatch} from "react-redux";
import Dashboard from "./Components/Dashboard";
import {usersActions} from "./Actions/userActions";



function App() {

  const dispatch = useDispatch();
  dispatch(usersActions.willsetUsers());

  // useEffect(() => {
  //   console.log("Hola");
  //   dispatch(willSetUsers);
  // }, []);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
