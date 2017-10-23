import {
    Environment,
    Network,
    RecordSource,
    Store
} from 'relay-runtime'

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
    // return fetch('https://api.graph.cool/relay/v1/cj8huwzms027n01503wlkohes', {
    return fetch('https://api.graph.cool/relay/v1/cj93tx6y202ar0164uu24lxvw', {
        method: 'POST',
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text,
            variables
        })
    })
    .then(response => {
        return response.json()
    })
})

const environment = new Environment({
    network,
    store
})

export default environment
