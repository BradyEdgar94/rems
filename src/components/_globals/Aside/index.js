import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.js'
import injectSheet from 'react-jss'

const Aside = ({ classes }) =>
    <aside className={classes.aside}>
        <nav className={classes.nav}>
            <li><Link to="/" className={`${classes.active} active`}>Dashboard</Link></li>
            <li><Link to="/sitemap">Sitemap</Link></li>
            <li><Link to="/webhooks">Webhooks</Link></li>
            <li><Link to="/models">Models</Link></li>
            <li><Link to="/entry-types">Entry Types</Link></li>
            <li><a href="https://console.graph.cool/REMS/playground" target="_blank" rel="noopener noreferrer">API Explorer</a></li>
        </nav>
    </aside>

export default injectSheet(styles)(Aside)
