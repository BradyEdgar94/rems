import v from '../../../styles/atoms/_variables'
import _exit from '../../../statics/icons/exit.svg'

export default ({
    gravatar: {
        display: 'table',
        '& img': {
            display: 'block',
            width: '4rem',
            height: '4rem',
            float: 'left',
            marginRight: '1rem'
        }
    },
    callout: {
        display: 'table-cell',
        verticalAlign: 'middle',
        '@global': {
            'h4': {
                fontSize: '0.85rem',
                marginBottom: '0.45rem'
            },
            'a': {
                position: 'relative',
                paddingLeft: '1rem',
                fontSize: '0.75rem',
                color: v.dark,
                textDecoration: 'none',
                transition: 'color 0.25s ease-in-out',
                '&:hover': {
                    color: v.primary.light,
                    '&:before': {
                        fill: v.primary.light,
                    }

                },
                '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    left: 0,
                    top: '0.25rem',
                    width: '0.75rem',
                    height: '0.75rem',
                    background: `url(${_exit})`,
                    transition: 'fill 0.25s ease-in-out',
                }
            }
        }
    }
})
