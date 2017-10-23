import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.js'
import injectSheet from 'react-jss'
import _sheid from '../../../statics/icons/sheid.svg'
import _dots from '../../../statics/icons/dots.svg'

const Account = ({ classes }) =>
    <div className={classes.account}>
        <div className={classes.top}>
            <img src={_sheid} alt="briefing icon" />
            <p className="h4"><strong>Your Account</strong></p>
        </div>
        <div className={classes.callout}>
            <span>39.65<em>/ month</em></span>
        </div>
        <div className={classes.bottom}>
            <div className={classes.learnMore}><Link to="/" className="btn"><span>Go Pro</span></Link></div>
            <Link to="/" className={classes.dots}><img src={_dots} alt="more" /></Link>
        </div>
    </div>

export default injectSheet(styles)(Account)
