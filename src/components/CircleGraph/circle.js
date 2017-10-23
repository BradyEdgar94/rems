import React from 'react'
import styles from './styles.js'
import injectSheet from 'react-jss'


const Circle = ({ classes, value, animation }) =>
    <div className={classes.circle}>
        <em>{value}%</em>
        <svg className={classes.wrapper} id="chart-4" width="50%" viewBox="0 0 100 100">
            <path className={classes.underlay} d="M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50"></path>
                <desc>Circle Graph</desc>
                <defs></defs>
                <path
                    d="M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50"
                    className={classes.circleGraph2}
                    style={{strokeDashoffset: `${value}px`, strokeDasharray: `${animation}px`}}
                >
            </path>
        </svg>
        <svg className={classes.overlay} viewBox="0 0 80 40">
            <defs>
                <clipPath id="clip" x="0" y="0" width="80" height="40" >
                    <rect id="clip-rect" x="-80" y="0" width="77" height="38.7"/>
                </clipPath>
                <linearGradient id="gradient">
                    <stop offset="0" stopColor="#F6548a" />
                    <stop offset="0.3" stopColor="#F6548a" />
                    <stop offset="0.6" stopColor="#FF8F86" />
                    <stop offset="1" stopColor="#FF8F86" />
                </linearGradient>
            </defs>
        </svg>
    </div>

export default injectSheet(styles)(Circle)
