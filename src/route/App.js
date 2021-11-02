import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexContainer from '../containers/IndexContainer';

const App = () =>{

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <IndexContainer />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;