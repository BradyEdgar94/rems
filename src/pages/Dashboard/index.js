import React from 'react'
import Dashboard from '../../components/Dashboard'
import styles from './styles.js'
import injectSheet from 'react-jss'

const Page = ({ classes }) =>
    <div className={classes.page}>
        <Dashboard />
    </div>

export default  injectSheet(styles)(Page)
