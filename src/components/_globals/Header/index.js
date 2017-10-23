import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from '../Gravatar'
import { withRouter } from 'react-router'
import styles from './styles.js'
import _logo from '../../../statics/icons/logo.svg'
import injectSheet from 'react-jss'

const Header = ({ classes }) =>
    <header className={`${classes.header}`}>
      <div className={classes.logo}>
        <Link to='/'><img src={_logo} alt="REMS Logo" /></Link>
      </div>
      <div className={classes.profile}>
        <Gravatar />
      </div>
    </header>

export default withRouter(injectSheet(styles)(Header))
