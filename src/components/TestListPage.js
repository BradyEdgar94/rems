import React, { Component } from 'react'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../Environment'
import TestList from './TestList'

const TestListPageQuery = graphql`
  query TestListPageQuery {
    viewer {
      ...TestList_viewer
    }
  }
`

class TestListPage extends Component {

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={TestListPageQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <TestList viewer={props.viewer} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }

}

export default TestListPage
