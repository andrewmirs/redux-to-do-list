import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import { Route } from 'react-router-dom';
import List from './list';


const App = () => (
    <div className="container">
        <Route exact path="/" component={List} />
    </div>
);

export default App;
