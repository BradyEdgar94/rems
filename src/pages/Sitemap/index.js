import React from 'react'
import Card from '../../components/Card'
import Search from '../../components/_globals/_inputs/Search'
import Sitemap from './Sitemap'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from '../../Environment'

const SitemapPageQuery = graphql`
  query SitemapPageQuery {
    viewer {
      ...Sitemap_viewer
    }
  }
`

const Page = ({ classes, list, ...test }) =>
    <QueryRenderer
        environment={environment}
        query={SitemapPageQuery}
        render={({error, props}) => {
            if (error) {
                return <div>{error.message}</div>
            } else if (props) {
                return (
                    <div>
                        <Card>
                            <Search lg />
                        </Card>
                        <Card>
                            <Sitemap viewer={props.viewer} />
                        </Card>
                    </div>
                )
            }
                return <div>Loading</div>
            }
        }
    />

export default Page
