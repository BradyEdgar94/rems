import v from '../../styles/atoms/_variables'

export default ({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    top: {
        position: 'relative',
        borderBottom: `solid 1px ${v.grey.lightMed}`,
        padding: ['1.75rem 1.5rem 1.75rem 4.5rem'],
        '@global': {
            'p': {
                lineHeight: 1.5,
                fontWeight: '800',
                fontSize: '1.05rem',
                color: v.grey.medDark
            },
            '.action': {
                position: 'absolute',
                right: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '0.85rem',
                display: 'block'
            },
            'img': {
                position: 'absolute',
                display: 'block',
                padding: '0.35rem',
                backgroundColor: v.light,
                borderRadius: '3rem',
                left: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '2.25rem',
                height: '2.25rem'
            }
        }
    },
    bottom: {
        width: '100%',
        padding: ['1rem', '1.5rem'],
        position: 'relative',
        borderTop: `solid 1px ${v.grey.lightMed}`
    },
    dots: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '1.5rem',
        opacity: 0.75,
        '& img': {
            width: '1.5rem'
        }
    }
})
