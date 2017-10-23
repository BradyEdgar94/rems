import React from 'react'
import styles from './styles.js'
import injectSheet from 'react-jss'
import Briefing from './Briefing'
import Account from './Account'
import AverageVisits from './AverageVisits'
import BounceChart from './BounceChart'
import PopularPages from './PopularPages'
import { withState, compose, lifecycle } from 'recompose'

const enhance = compose(
    withState('loaded', 'toggleLoaded', false),
    lifecycle({
        componentWillMount() {
            setTimeout(() => this.props.toggleLoaded(true), 200)
        }
    })
)

const Card = enhance(({ classes, type = false, loaded, children }) =>
    <div className={`${classes.card} ${type} ${loaded && classes.loaded} ${!type && classes.withPadding}`}>
        <div className={`${classes.loader} ${loaded && classes.loaded}`}>
            { type ? Type(type) : children }
        </div>
    </div>
)


function Type (type) {
    switch (type) {
        case 'brief':
        return <Briefing />
    case 'account':
        return <Account />
    case 'averageVisits':
        return <AverageVisits />
    case 'bounceChart':
    return <BounceChart />
    case 'popularPages':
        return <PopularPages />
    default:
        return <p>Please add a type prop</p>
    }
}


export default injectSheet(styles)(Card)
