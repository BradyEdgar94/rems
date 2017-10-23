import v from '../../styles/atoms/_variables'
// import _assets from '../../../statics/icons/assets.svg'

export default ({
    card: {
        backgroundColor: v.white,
        borderRadius: '0.75rem',
        display: 'inline-block',
        opacity: 0,
        overflow: 'hidden',
        width: '100%',
        boxShadow: `0.25rem 0.25rem 1rem #ECECEC`,
        transition: 'opacity 0.25s ease-in-out'
    },
    loader: {
        opacity: 0,
        transform: 'scale(0.95)',
        transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
    },
    loaded: {
        opacity: 1,
        transform: 'scale(1)'
    },
    withPadding: {
        padding: '3rem',
        '& + &': {
            marginTop: '1.5rem'
        }
    }
})
