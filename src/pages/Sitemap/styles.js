import v from '../../styles/atoms/_variables'

export default ({
    page: {

    },
    list: {
        width: '100%'
    },
    labels: {
        '& p': {
            position: 'relative',
            width: '100%',
            padding: ['0 0 2rem 0'],
            borderBottom: `solid 1px ${v.grey.lightMed}`,
            textAlign: 'left',
            '& strong': {
                fontWeight: 700,
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                float: 'left',
                '&:first-child': {
                    marginLeft: '2rem',
                    width: '30%',
                    maxWidth: '20rem'
                },
                '&:nth-child(2)': {
                    width: '30%',
                    maxWidth: '20rem',
                    marginLeft: '-0.5rem'
                },
                '&:nth-child(3)': {
                    width: '30%',
                    maxWidth: '20rem',
                    marginLeft: '-3rem'
                },
                '&:nth-child(4)': {
                    position: 'absolute',
                    right: '8.25rem',
                    top: '0.45rem',
                    transform: 'translateY(-50%)',
                },
                '&:last-child': {
                    position: 'absolute',
                    right: '1.5rem',
                    top: '0'
                }
            }
        }
    },
    item: {
        width: '100%',
        padding: '1.35rem 3rem 1.35rem 4.25rem',
        position: 'relative',
        color: v.dark,
        backgroundColor: v.white,
        overflow: 'hidden',
        borderBottom: `solid 1px ${v.grey.lightMed}`,
        transition: 'background-color 0.25s ease-in-out',
        '&:nth-child(odd)': {
            backgroundColor: '#FEFEFE'
        },
        '&:last-child': {
            borderBottom: 'none'
        },
        '&:hover': {
            backgroundColor: v.light,
        },
        '& img': {
            position: 'absolute',
            left: '1.75rem',
            top: '1rem',
            width: '1.5rem',
            height: '1.5rem',
            filter: 'invert(100%)'
        },
        '& .editButton': {
            position: 'absolute',
            right: '8rem',
            top: '50%',
            transform: 'translateY(-50%)',
            '& .fixed-action-btn': {
                position: 'relative',
                bottom: 0,
                right: 0,
                padding: 0
            }
        },
        '& .deleteButton': {
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            '& .fixed-action-btn': {
                position: 'relative',
                bottom: 0,
                right: 0,
                padding: 0
            }
        },
        '& p': {
            fontSize: '0.85rem',
            paddingRight: '3.5rem',
            '& span': {
                fontWeight: '700',
                float: 'left',
                '&:first-child': {
                    width: '30%',
                    maxWidth: '20rem'
                },
                '&:nth-child(2)': {
                    width: '30%',
                    maxWidth: '20rem'
                },
                '&:nth-child(3)': {
                    width: '30%',
                    maxWidth: '20rem'
                }
            }
        },
    }
})
