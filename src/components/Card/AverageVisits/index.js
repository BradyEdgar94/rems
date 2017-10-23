import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.js'
import injectSheet from 'react-jss'
import CircleGraph from '../../CircleGraph'
import _graph from '../../../statics/icons/graph.svg'

const AverageVisits = ({ classes }) =>
    <div className={classes.averageVisits}>
        <div className={classes.top}>
            <img src={_graph} alt="briefing icon" />
            <p className="h4"><strong>Average Visits</strong></p>
            <span className="action">
                <Link to="/" className="btn"><span>View all</span></Link>
            </span>
        </div>
        <div className={classes.callout}>
            <div className={classes.inner}>
                <CircleGraph />
            </div>
        </div>
    </div>

export default injectSheet(styles)(AverageVisits)
