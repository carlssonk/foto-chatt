import React from "react";
// Pages/Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import ChatList from "./pages/ChatList";
import Chat from "./pages/Chat";
// Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/profile" component={Profile} />
                <Route path="/c/:id" component={Chat} />
                <Route path="/c" component={ChatList} />
            </Switch>
        </Router>
    );
}

export default App;