import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {store} from './store/store.js'
import {Navbar} from '../src/module/navBar/navBar.jsx';
import {IncreaseForm} from '../src/module/nameList/IncreaseNameList.jsx'
import {DeleteForm} from '../src/module/nameList/DeleteNameList.jsx'
import {UpdateForm} from '../src/module/nameList/UpdateNameList.jsx'
import {Home} from '../src/module/homePage/home.js'
import {Login} from '../src/module/Login/login.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useRouteMatch
} from "react-router-dom";



ReactDOM.render(

  // <React.StrictMode>
  <Provider store={store}>
            <Router>
                  <Switch>
                      <Route exact path="/">
                                    <Login/>
                      </Route>
                      <Route exact path="/Home">
                                <>
                                    <Home/>
                                </>
                      </Route>
                      <Route exact path="/Increase">
                                <>
                                    <IncreaseForm/>
                                </>
                      </Route>
                      <Route path="/Delete">
                                <>
                                    <DeleteForm/>
                                </>
                      </Route>
                      <Route path="/Update">
                                <>
                                    <UpdateForm/>
                                </>
                      </Route>
                  </Switch>
            </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
