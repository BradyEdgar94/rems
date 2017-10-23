import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.js'
import injectSheet from 'react-jss'
import Circle from './circle'

const CircleGraph = ({ classes }) =>
    <div className={classes.container}>
        <div className={classes.circleContainer}>
            <Circle value="45" animation="282.783111572266"  />
        </div>
        <div className={classes.content}>
            <p><strong>11.45<em>/ minutes</em></strong></p>
            <p>Page Views</p>
            <ul>
                <li><Link to="/">/what-we-do</Link></li>
                <li><Link to="/">/what-we-do</Link></li>
                <li><Link to="/">/what-we-do</Link></li>
            </ul>
        </div>
    </div>

export default  injectSheet(styles)(CircleGraph)
