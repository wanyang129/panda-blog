import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Blog from './pages/Blog';
import College from './pages/College';
import Downloads from './pages/Downloads/Downloads';
import DownloadsDetail from './pages/Downloads/Detail'
import Forum from './pages/Forum';
import Questions from './pages/Questions';
import Code from './pages/Code';
import Recruit from './pages/Recruit';
import EBook from './pages/EBook';
import Member from './pages/Member';
const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/college" component={College} />
            <Route exact path="/downloads" component={Downloads} />
            <Route exact path="/downloads/detail/:id" component={DownloadsDetail} />
            <Route exact path="/forum" component={Forum} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/recruit" component={Recruit} />
            <Route exact path="/ebook" component={EBook} />
            <Route exact path="/member" component={Member} />
        </Switch>
    </HashRouter>
);
export default BasicRoute;