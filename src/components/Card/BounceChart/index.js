import React from 'react'
import styles from './styles.js'
import injectSheet from 'react-jss'
import Chart from '../../Chart'
import _graph from '../../../statics/icons/graph.svg'

const BounceChart = ({ classes }) =>
    <div className={classes.bounceChart}>
        <div className={classes.top}>
            <img src={_graph} alt="briefing icon" />
            <p className="h4"><strong>Bounce Rate</strong></p>
            <span className="action">
                <button className="active btn">Daily</button>
                <button className="btn">Monthly</button>
            </span>
        </div>
        <div className={classes.content}>
            <div className={classes.callout}>
                <Chart />
            </div>
        </div>
    </div>

export default injectSheet(styles)(BounceChart)
