import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect, Switch, useParams, useRouteMatch  } from 'react-router-dom';


export default function (props) {
    let { topicId } = useParams();
    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    )
}