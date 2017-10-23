import React from 'react'
import Card from '../Card'
import styles from './styles.js'
import injectSheet from 'react-jss'

const Dashboard = ({ classes }) =>
    <div className={classes.dashboard}>
        <div className="row">
            <div className="col l4 m12 s12">
                <Card type="brief" />
            </div>
            <div className="col l3 m6 s12 account">
                <Card type="account" />
            </div>
            <div className="col l5 m6 s12 averageVisits">
                <Card type="averageVisits" />
            </div>
            <div className="col l7 m12 s12">
                <Card type="bounceChart" />
            </div>
            <div className="col l5 m12 s12">
                <Card type="popularPages" />
            </div>
        </div>
    </div>

export default  injectSheet(styles)(Dashboard)
