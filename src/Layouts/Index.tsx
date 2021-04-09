import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { mainRoutes } from '../routes';

const ComponentsDisplay = () => {
    const [token, setToken]  = useState(false)
    useEffect(()=>{
        let ar = localStorage.getItem('token') || null
        ar && setToken(true)
    })
    return (
        <Router>
            <Suspense fallback={<div>loading...</div>}>
                <Switch>
                    {mainRoutes.map((route) => (
                        <Route key={route.path} path={route.path} component={route.component} />
                    ))}
                    {/* 重定向路由。 */}
                    {
                        token ? <Redirect exact to='/Login'/> : <Redirect exact to='/Home'/>
                    }

                </Switch>
            </Suspense>
        </Router>
    );
};

export default ComponentsDisplay;
