import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'path-to-regexp';

import Google from './Google/script/Pages/Google.js';
import Mail from './Google/script/Pages/Mail';
import Images from './Google/script/Pages/Images';
import TabRouter from './Google/script/Pages/TabRenderer';
import Portfolio from "./Google/script/Pages/Portfolio";
import BrandName from "./Google/script/Pages/BrandName";

class App extends Component {
    render () {
        return (
            <Switch>
                <Route path='/' component={Google} exact/>
                <Route path='/mail' component={Mail}/>
                <Route path='/images' component={Images}/>
                <Route path='/tab:number' component={TabRouter}/>
                <Route path='/portfolio' component={Portfolio}/>
                <Route path='/brandname' component={BrandName}/>
            </Switch>
        );
    }
}

export default App;
