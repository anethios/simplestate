import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import { Dash } from './components/dash'
import { Login } from './components/login'
import { useGlobalState } from './state/statecontext'
import './App.css';

function App() {
  const [{user}, dispatch] = useGlobalState()

  return (
    <Router>
          <Navbar
            bg="dark"
            variant="dark"
          >
            <Navbar.Brand> Simple Store Template</Navbar.Brand>
            <br/>
            <Navbar.Collapse>
              <Nav>
                <NavLink 
                  to="/" exact
                  className="navButton"
                  activeClassName="nba">
                  {user.id == null && <div>Login</div>}
                  {user.id != null && <div>Home</div>}
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            <Nav
              onClick={() => dispatch({type: 'Logout'})}
              className="navButton">
                Logout
            </Nav>
          </Navbar>
          {user.id == null &&
            <Route exact path="/" component = {Login}/>
          }
          {user.id != null &&
            <Route exact path="/" component = {Dash}/>
          }
      </Router>
  );
}

export default App;
