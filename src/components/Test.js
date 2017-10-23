import React from 'react'
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

const Test = ({ link }) => {

    return (
        <div>
            <div>{link.description} ({link.url})</div>
        </div>
    )

    // _voteForLink = async () => {
    //     // to be continured
    // }
}

export default createFragmentContainer(Test, graphql`
    fragment Test_link on Link {
        id
        description
        url
    }
`)
