import globals from '../globals'

export default ({
    averageVisits: {
        ...globals.container
    },
    top: {
        ...globals.top
    },
    callout: {
        padding: ['1.5rem', '1.5rem'],
        textAlign: 'center',
        '@media (min-width: 1290px)': {
            padding: ['1rem', '1.5rem']
        }
    },
    inner: {
        display: 'inline-block'
    },
    dots: {
        ...globals.dots
    }
})
