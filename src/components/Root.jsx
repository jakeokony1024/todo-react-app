import React from 'react';
import App from "./App";
import About from "./pages/About";
import NavigationBar from "./NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NoMatch from "./pages/NoMatch";


export default function Root( ) {

    // const routes = [
    //     { path:'/', name:"Home", component: App, exact:true },
    //     { path:'/about', name:"About", component: About, exact:false },
    //     { path:'/contact', name:"Contact", component: Contact, exact:false },
    //     { path:'/blog', name:"Blog", component: Blog, exact:true },
    //     { path:'/blog/:id', name:"Post", component: BlogPost, exact:false },
    //     { path:'*', name:"Home", component: NoMatch, exact:true },
    // ];


    return (
        <Router>
            <div className="todo-app-container">
                <NavigationBar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <App/>
                        </Route>
                        <Route exact path="/about">
                            <About/>
                        </Route>
                        <Route exact path="/contact">
                            <Contact/>
                        </Route>
                        <Route exact path="/blog">
                            <Blog/>
                        </Route>
                        <Route exact path="/blog/:id">
                            <BlogPost/>
                        </Route>
                        <Route path="*">
                            <NoMatch/>
                        </Route>
                        {/*{routes.map(({path, Component, exact}) => (*/}
                        {/*    <Route key={path} path={path} exact={exact}>*/}
                        {/*        <Component/>*/}
                        {/*    </Route>*/}
                        {/*))}*/}
                        {/*{routes.map(function({path, Component, exact}) {(*/}
                        {/*    <Route key={path} path={path} exact={exact}>*!/*/}
                        {/*        <Component/>*/}
                        {/*    </Route>*/}
                        {/*)})}*/}
                    </Switch>
                </div>
            </div>
        </Router>

)
}
