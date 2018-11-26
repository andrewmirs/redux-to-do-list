import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import { Route } from 'react-router-dom';
import List from './list';
import AddItem from './add_item';
import ViewItem from './view_item';


const App = () => (
    <div className="container">
        <Route exact path="/" component={List} />
        <Route path="/add-item" component={AddItem} />
        <Route path="/item/:item_id" component={ViewItem} />
    </div>
);

export default App;
