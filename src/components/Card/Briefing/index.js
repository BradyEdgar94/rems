import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.js'
import injectSheet from 'react-jss'
import _comment from '../../../statics/icons/comment.svg'
import _update from '../../../statics/icons/update.svg'
import _bell from '../../../statics/icons/bell.svg'
import _dots from '../../../statics/icons/dots.svg'

const Briefing = ({ classes }) =>
    <div className={classes.briefing}>
        <div className={classes.top}>
            <img src={_comment} alt="briefing icon" />
            <p className="h4"><strong>Your Breifing</strong></p>
            <span className="action">
                <Link to="/" className="btn"><span>View all</span></Link>
            </span>
        </div>
        <ul className={classes.list}>
            <li>
                <img src={_comment} alt="briefing icon" />
                <p>3 new comments pending</p>
                <span className="action"><Link to="/" className="btn sm"><span>Review</span></Link></span>
            </li>
            <li>
                <img src={_update} alt="briefing icon" />
                <p>2 new updates available</p>
                <span className="action"><Link to="/" className="btn sm"><span>Review</span></Link></span>
            </li>
            <li>
                <img src={_bell} alt="briefing icon" />
                <p>4 notifcations</p>
                <span className="action"><Link to="/" className="btn sm"><span>Review</span></Link></span>
            </li>
            <li>
                <img src={_comment} alt="briefing icon" />
                <p>3 new comments pending</p>
                <span className="action"><Link to="/" className="btn sm"><span>Review</span></Link></span>
            </li>
            <li>
                <img src={_comment} alt="briefing icon" />
                <p>3 new comments pending</p>
                <span className="action"><Link to="/" className="btn sm"><span>Review</span></Link></span>
            </li>
            <li>
                <img src={_comment} alt="briefing icon" />
                <p>3 new comments pending</p>
                <span className="action"><Link to="/" className="btn sm"><span>Review</span></Link></span>
            </li>
        </ul>
        <div className={classes.bottom}>
            <Link to="/" className={classes.dots}><img src={_dots} alt="more" /></Link>
        </div>
    </div>

export default injectSheet(styles)(Briefing)
