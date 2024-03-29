import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import {Route, NavLink, Switch, /*Redirect*/} from 'react-router-dom';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent( () => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth : true
    }
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li> <NavLink 
                                   to="/posts/" exact  
                                   activeClassName="my-active"
                                   activeStyle={{
                                       color: "#fa923f",
                                       fontWeight: "bold"
                                   }}> Posts  </NavLink></li>
                            <li> <NavLink to={{ 
                                pathname:'/new-post', 
                                hash: '#submit',
                                search:'?quick-submit=true'}}> New Post  </NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*
                <Route path="/" exact render={ () => <h1> Home </h1>} />
                <Route path="/"  render={ () => <h1> Home 2 </h1>} /> //this is how we should comment jsx*/}
            <Switch>
            { this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost}/> : null}
            <Route path="/posts" component={Posts}/>
            <Route render={ () => <h1><center> Not Found !!! </center></h1>} />
            {/*<Redirect from="/" to="/posts" />*/}
            </Switch>
            </div>
        );
    }
}

export default Blog;