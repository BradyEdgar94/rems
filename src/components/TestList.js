import React from 'react'
import Link from './Test'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

const TestList_viewer = ({ viewer }) =>
    <div>
      {viewer.allLinks.edges.map(({ node }) => (
        <Link key={node.__id} link={node}/>
      ))}
    </div>

export default createFragmentContainer(TestList_viewer, graphql`
    fragment TestList_viewer on Viewer {
        allLinks(last: 100, orderBy: createdAt_DESC) @connection(key: "TestList_viewer_allLinks", filters: []) {
            edges {
                node {
                    ...Test_link
                }
            }
        }
    }
`)
