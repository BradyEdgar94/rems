import v from './_variables'

export default ({
    '.btn': {
    	position: 'relative',
    	display: 'inline-block',
        padding: '0.5rem 1.15rem',
    	color: v.primary.light,
    	fontSize: '0.85rem',
    	textAlign: 'center',
    	textDecoration: 'none',
        background: 'none',
    	overflow: 'hidden',
        fontWeight: 400,
    	letterSpacing: '.08rem',
        border: `2px solid ${v.primary.light}`,
    	borderRadius: '3rem',
        zIndex: 2,
        boxShadow: 'none',
        height: 'auto',
        lineHeight: 'inherit',
    	transition: 'all 0.25s ease-in-out',
        '&::after': {
            content: '""',
            opacity: 0,
        	position: 'absolute',
        	height: 0,
        	left: '50%',
        	top: '50%',
        	width: '150%',
        	zIndex: -1,
        	transition: 'all 0.35s ease-in-out 0s'
        },
        '&:hover, &:visited:hover, &.active': {
            color: v.white
        },
        '&:hover:after, &:visited:hover:after, &.active:after': {
            height: '450%',
            opacity: 1
        },
        '&:after': {
            background: v.primary.lightGradientHorizontal,
        	transform: 'translateX(-50%) translateY(-50%) rotate(25deg)'
        },
        '&.sm': {
            fontSize: '0.65rem',
            padding: '0.4rem 1rem'
        },
        '& span': {
            position: 'relative',
            zIndex: 1,
        }
    },
    '.btn-floating.white': {
        boxShadow: 'none',
        width: '40px',
        height: '40px',
        '& i': {
            top: '0.35rem',
            color: v.dark,
            fontSize: '1.5rem'
        }
    }
})
