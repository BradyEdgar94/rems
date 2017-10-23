import v from '../../../styles/atoms/_variables'
import globals from '../globals'

export default ({
    account: {
        ...globals.container
    },
    top: {
        ...globals.top,
        '@media (max-width: 1241px) and (min-width: 992px)': {
            paddingTop: '1rem',
            paddingBottom: '1rem'
        }
    },
    callout: {
        height: '8.45rem',
        textAlign: 'center',
        position: 'relative',
        '& span': {
            position: 'absolute',
            fontSize: '2.5rem',
            top: '50%',
            left: 0,
            width: '100%',
            textAlign: 'center',
            transform: 'translateY(-50%)',
            color: v.grey.med,
            '& em': {
                fontSize: '1rem',
                display: 'block',
                '@media (min-width: 1290px)': {
                    paddingLeft: '0.75rem',
                    display: 'inline-block'
                }
            }
        }
    },
    bottom: {
        ...globals.bottom
    },
    dots: {
        ...globals.dots
    }
})
