import v from '../../../styles/atoms/_variables'
import globals from '../globals'

export default ({
    briefing: {
        ...globals.container
    },
    top: {
        ...globals.top,
        '& .action': {
            '@media screen and (max-width: 1280px) and (min-width: 993px)': {
                display: 'none !important'
            },
            '@media screen and (max-width: 881px) and (min-width: 600px)': {
                display: 'none !important'
            }
        },
    },
    list: {
        width: '100%',
        maxHeight: '10.5rem',
        overflow: 'auto',
        '@global': {
            'li': {
                width: '100%',
                padding: '1.35rem 3rem 1.35rem 4.25rem',
                position: 'relative',
                color: v.grey.med,
                backgroundColor: v.white,
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
                    height: '1.5rem'
                },
                '& .action': {
                    fontSize: '0.75rem',
                    position: 'absolute',
                    right: '1.5rem',
                    left: 'auto',
                    top: '50%',
                    transform: 'translateY(-50%)',
                },
                '& p': {
                    fontSize: '0.85rem',
                    paddingRight: '3.5rem'
                },
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
