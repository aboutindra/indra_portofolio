import {Routers} from "./Config";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from "react";

export default function Switchers() {
    return(
        <BrowserRouter>
            <Switch>
                {
                    Routers.map((route, id)=>(
                        <Route key={id} exact path = {route.path}   component= {route.component} />
                    ))
                }
            </Switch>
        </BrowserRouter>
    );
}