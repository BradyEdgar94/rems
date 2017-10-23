import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import styles from './styles.js'
import injectSheet from 'react-jss'
import _placeholder from '../../../statics/icons/placeholders/user.svg'

const Gravatar = ({ classes, src = false, firstname = 'John' }) =>
    <div className={classes.gravatar}>
    <Link to="/profile">
        <img src={src ? src : _placeholder} alt="profile" />
    </Link>
    <div className={classes.callout}>
        <h4>Hello, {firstname}</h4>
        <Link to='/sign-out'>Sign out</Link>
    </div>
    </div>

export default withRouter(injectSheet(styles)(Gravatar))
