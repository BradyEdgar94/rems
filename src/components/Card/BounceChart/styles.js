import globals from '../globals'

export default ({
    bounceChart: {
        ...globals.container
    },
    top: {
        ...globals.top,
        '& button': {
            '&:first-child': {
                marginRight: '0.85rem'
            }
        }
    },
    content: {
        textAlign: 'center'
    },
    callout: {
        padding: ['1.5rem', '1.5rem'],
    }
})
