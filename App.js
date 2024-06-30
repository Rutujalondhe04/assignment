import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                {/* Add other routes */}
            </Switch>
        </Router>
    );
};

export default App;
