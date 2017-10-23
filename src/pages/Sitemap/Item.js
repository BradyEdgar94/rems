import React from 'react'
import styles from './styles'
import injectSheet from 'react-jss'
import _page from '../../statics/icons/page.svg'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

const Item = ({ classes = {}, link }) =>
    <li className={classes.item}>
        <img src={_page} alt="briefing icon" />
        <p className={classes.row}>
            <span>{link.name}</span>
            <span>{link.url}</span>
            <span>{link.url}</span>
        </p>
        <Edit />
        <Delete />
    </li>

export default createFragmentContainer(injectSheet(styles)(Item), graphql`
    fragment Item_link on Page {
        id
        name
        url
    }
`)



// helpers
const Edit = () =>
    <div className="editButton">
        <div className="fixed-action-btn horizontal">
            <a className="btn-floating btn-sm white">
                <i className="large material-icons">mode_edit</i>
            </a>
            <ul>
            <li><a className="btn-floating grey"><i className="material-icons">computer</i></a></li>
                <li><a className="btn-floating green"><i className="material-icons">content_paste</i></a></li>
                <li><a className="btn-floating yellow"><i className="material-icons">collections</i></a></li>
                <li><a className="btn-floating red"><i className="material-icons">delete</i></a></li>
            </ul>
        </div>
    </div>

const Delete = () =>
    <div className="deleteButton">
        <div className="fixed-action-btn horizontal">
            <a className="btn-floating btn-sm white">
                <i className="large material-icons">delete</i>
            </a>
        </div>
    </div>
