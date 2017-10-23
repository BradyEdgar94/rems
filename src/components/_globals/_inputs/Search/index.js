import React from 'react'
import styles from './styles.js'
import injectSheet from 'react-jss'
import _search from '../../../../statics/icons/search.svg'

const Search = ({ classes, lg }) =>
    <div className={classes.search}>
        <div className={classes.searchContainer}>
            <input className={`${classes.input} ${lg && 'lg'}`} placeholder="Search" />
            <img src={_search} alt="Search Icon" />
        </div>
    </div>

export default injectSheet(styles)(Search)
