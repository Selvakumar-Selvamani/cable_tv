import React from 'react';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Homepage from '../Views/Homepage';
import UserLogin from '../Views/Login';
import UserDashboard from '../Views/Dashboard/UserDashboard'
import InnerHeader from '../Components/Header/InnerHeader'
import ConnectionDetails from '../Views/Dashboard/ConnectionDetails';
import TransactionDetails from '../Views/Dashboard/TransactionDetails';
import UserDetails from '../Views/Dashboard/CustomerDetails';


const Routes = (props) => {
    return (
        <>
            {props.location.pathname === "/home" && < Header />}
            {props.location.pathname.includes('/userdashboard') && <InnerHeader /> || props.location.pathname.includes('/operatordashboard') && <InnerHeader />}
            <Switch>
                <Route exact path="/">
                    <Redirect to='/home' />
                </Route>
                <Route exact path='/home' component={Homepage} />
                <Route exact path='/userlogin' component={UserLogin} />
                <Route exact path='/operatorlogin' component={UserLogin} />
                <Route exact path='/userdashboard' component={UserDashboard} />
                <Route exact path='/userdashboard/connectiondetails' component={ConnectionDetails} />
                <Route exact path='/userdashboard/transactiondetails' component={TransactionDetails} />
                <Route exact path='/operatordashboard' component={UserDashboard} />
                <Route exact path='/operatordashboard/connectiondetails' component={ConnectionDetails} />
                <Route exact path='/operatordashboard/userdetails' component={UserDetails} />
                <Route exact path='/operatordashboard/transactiondetails' component={TransactionDetails} />
            </Switch>
        </>
    )
}

export default withRouter(Routes);