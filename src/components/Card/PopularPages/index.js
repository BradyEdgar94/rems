import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.js'
import injectSheet from 'react-jss'
import _list from '../../../statics/icons/list.svg'
import _page from '../../../statics/icons/page.svg'
import _trophy from '../../../statics/icons/trophy.svg'

const PopularPages = ({ classes }) =>
    <div className={classes.PopularPages}>
        <div className={classes.top}>
            <img src={_list} alt="briefing icon" />
            <p className="h4"><strong>Popular Pages</strong></p>
            <span className="action">
                <Link to="/" className="btn"><span>View all</span></Link>
            </span>
        </div>
        <div className={classes.labels}>
            <p><strong>Pages</strong><strong>Improvments</strong><strong>Views</strong></p>
        </div>
        <ul className={classes.list}>
            <li>
                <img src={_trophy} alt="briefing icon" />
                <p>
                    Products Page
                    <em>14%</em>
                    <em>245</em>
                </p>
            </li>
            <li>
                <img src={_page} alt="briefing icon" />
                <p>
                    Products Page
                    <em>14%</em>
                    <em>245</em>
                </p>
            </li>
            <li>
                <img src={_page} alt="briefing icon" />
                <p>
                    Products Page
                    <em>14%</em>
                    <em>245</em>
                </p>
            </li>
            <li>
                <img src={_page} alt="briefing icon" />
                <p>
                    Products Page
                    <em>14%</em>
                    <em>245</em>
                </p>
            </li>
            <li>
                <img src={_page} alt="briefing icon" />
                <p>
                    Products Page
                    <em>14%</em>
                    <em>245</em>
                </p>
            </li>
            <li>
                <img src={_page} alt="briefing icon" />
                <p>
                    Products Page
                    <em>14%</em>
                    <em>245</em>
                </p>
            </li>
            <li>
                <img src={_page} alt="briefing icon" />
                <p>
                    Products Page
                    <em>14%</em>
                    <em>245</em>
                </p>
            </li>
            <li>
                <img src={_page} alt="briefing icon" />
                <p>
                    Products Page
                    <em>14%</em>
                    <em>245</em>
                </p>
            </li>
        </ul>
    </div>

export default injectSheet(styles)(PopularPages)
