import v from '../../styles/atoms/_variables'

export default ({
    bar: {
        position: 'absolute',
        bottom: '12.5rem',
        left: 0,
        width: '100%',
        height: '2px',
        backgroundColor: v.grey.lightMed
    },
    columns: {
        width: '100%',
        overflow: 'hidden'
    },
    column: {
        position: 'relative',
        float: 'left',
        minHeight: '16rem',
        width: '10%',
        "& p": {
            position: 'absolute',
            bottom: '1.5rem',
            width: '9rem',
            fontSize: '0.8rem',
            left: '-2.5rem',
            color: v.grey.med,
            transform: 'rotate(270deg)'
        },
        '& span': {
            position: 'absolute',
            top: 'calc(50% - 2rem)',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'block',
            width: '1rem',
            background: v.primary.lightGradientVertical,
            borderRadius: '2rem'
        }
    }
})
