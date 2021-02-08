import React from 'react'
import { useState } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect, Switch, useParams, useRouteMatch  } from 'react-router-dom';
import './index.scss';
import Topic from './components/topic'

function PageA () {
    const [str] = useState('pageB');
    let { path, url } = useRouteMatch();
    const { num } = useParams();
    return (
        <div className="page page-b">
            {str + num}
            <nav className="page-b-nav">
                <Link to={`${url}/rendering`}>1、 关于a</Link>
                <Link to={`${url}/components`}>2、关于b</Link>
                <Link to={`${url}/props-v-state`}>3、关于c</Link>
            </nav>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    )
}
export default PageA