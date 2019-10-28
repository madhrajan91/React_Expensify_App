import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'


import AddExpenseComponent from './../components/AddExpenseComponent.js'
import EditExpenseComponent from'./../components/EditExpenseComponent.js'
import ExpenseDashboardComponent from './../components/ExpenseDashboardComponent.js'
import Header from './../components/Header.js'
import HelpExpenseComponent from'./../components/HelpExpenseComponent.js'
import NotFoundComponent from'./../components/NotFoundComponent.js'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardComponent} exact={true}/>
                <Route path="/create" component={AddExpenseComponent}/>
                <Route path="/edit/:id" component={EditExpenseComponent}/>
                <Route path="/help" component={HelpExpenseComponent}/>
                <Route component={NotFoundComponent}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;