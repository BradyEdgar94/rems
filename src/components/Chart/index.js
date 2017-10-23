import React from 'react'
import styles from './styles.js'
import injectSheet from 'react-jss'

const Chart = ({ classes, type }) =>
    <div className={classes.chart}>
        <span className={classes.bar}></span>
        <div className={classes.columns}>
            <div className={classes.column}>
                <span style={{height: '40%'}}></span>
                <p>August 06</p>
            </div>
            <div className={classes.column}>
                <span style={{height: '20%'}}></span>
                <p>August 06</p>
            </div>
            <div className={classes.column}>
                <span style={{height: '30%'}}></span>
                <p>August 06</p>
            </div>
            <div className={classes.column}>
                <span style={{height: '70%'}}></span>
                <p>August 06</p>
            </div>
            <div className={classes.column}>
                <span style={{height: 'calc(100% - 7rem)'}}></span>
                <p>August 06</p>
            </div>
            <div className={classes.column}>
                <span style={{height: '30%'}}></span>
                <p>August 06</p>
            </div>
            <div className={classes.column}>
                <span style={{height: '70%'}}></span>
                <p>August 06</p>
            </div>
            <div className={classes.column}>
                <span style={{height: '30%'}}></span>
                <p>August 06</p>
            </div>
            <div className={classes.column}>
                <span style={{height: '20%'}}></span>
                <p>August 06</p>
            </div>
            <div className={classes.column}>
                <span style={{height: '50%'}}></span>
                <p>August 06</p>
            </div>
        </div>
    </div>

export default injectSheet(styles)(Chart)
