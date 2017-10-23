import React from 'react'
import CreateLink from './CreateLink'
// import TestListPage from './TestListPage'
import Dashboard from '../pages/Dashboard'
import Sitemap from '../pages/Sitemap'
import Header from './_globals/Header'
import Aside from './_globals/Aside'
import { Switch, Route } from 'react-router-dom'
import styles from '../styles/index'
import injectSheet from 'react-jss'

const App = ({ classes }) =>
    <main className={classes.main}>
        <Header />
        <Aside />
        <div className="container">
            <Switch>
                <Route exact path='/' component={Dashboard}/>
                <Route exact path='/sitemap' component={Sitemap}/>
                <Route exact path='/create' component={CreateLink}/>
            </Switch>
        </div>
    </main>

export default injectSheet(styles)(App)
