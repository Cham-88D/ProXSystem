import React from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import  Login from '../app/views/sessions/login/Login'
import  Pass from '../app/views/sessions/ForgotPassword'
import A1 from '../app/views/dashboard/Analytics2'
import Layout1 from "../app/components/MatxLayout/Layout1/Layout1";
import {check} from "../auth/validateAuth"




//Basic Routes

const Base = ({ component: Component }) => {

    return (
        <Route  render={props => (  <Component {...props} /> ) } />
    );
};






//DashBoard Routes

const Dash = ({ component: Component }) =>  {

    let history = useHistory();

    if(check() === true)
    {
        history.push("/");
    }



    return (
    <Route  render={props => (
                <Layout1   component={<Component {...props}/>} />
            )

    } />
    );
};





export default () => (
    <Switch>
        <Base exact path={'/'} component={Login} />
        <Base exact path={'/passwordRest'} component={Pass} />
        <Dash exact path={'/dashboard'} component={A1} />
    </Switch>
);