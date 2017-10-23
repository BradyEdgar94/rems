import React from 'react'
import styles from './styles'
import injectSheet from 'react-jss'
import Item from './Item'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

const LinkList = ({ classes, viewer }) =>
    <div className={classes.sitemap}>
        <div className={classes.labels}>
            <p>
                <strong>Page</strong>
                <strong>Visits</strong>
                <strong>Location</strong>
                <strong>Edit</strong>
                <strong>Delete</strong>
            </p>
        </div>
        <ul className={classes.list}>
            {viewer.allPages.edges.map(({ node }) => (
              <Item key={node.__id} link={node}/>
            ))}
        </ul>
    </div>

export default createFragmentContainer(injectSheet(styles)(LinkList), graphql`
    fragment Sitemap_viewer on Viewer {
        allPages(last: 100, orderBy: createdAt_DESC) @connection(key: "Sitemap_allPages", filters: []) {
            edges {
                node {
                    ...Item_link
                }
            }
        }
    }
`)
