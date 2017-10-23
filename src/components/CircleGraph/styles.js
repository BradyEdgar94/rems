import v from '../../styles/atoms/_variables'
import fonts from '../../styles/atoms/typography'

export default ({
    container:{
        width: '100%',
        overflow: 'hidden'
    },
    circleContainer: {
        width: '40%',
        maxWidth: '10rem',
        float: 'left'
    },
    circle: {
        position: 'relative',
        '& em': {
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            display: 'block',
            textAlign: 'center',
            transform: 'translateY(-50%)',
            fontSize: '2rem',
            color: v.grey.med,
            fontStyle: 'normal'
        }
  },
  'wrapper': {
      width: '100%',
      transform: 'rotate(90deg)'
  },
  'circleGraph2': {
        stroke: 'url(#gradient)',
        strokeWidth: 5,
        fill: 'transparent',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
    },
    'underlay': {
        strokeWidth: 5,
        fill: 'transparent',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        stroke: v.grey.lightMed
    },
    overlay: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    inner: {
        display: 'inline-block',
    },
    content: {
        float: 'left',
        paddingLeft: '2rem',
        textAlign: 'left',
        '& p': {
            '&:first-child': {
                fontSize:'1.85rem',
                marginBottom: '1rem',
                color: v.grey.med,
                '@media (min-width: 1290px)': {
                    '&': {
                        fontSize:'2.85rem'
                    }
                },
                '& em': {
                    fontSize:'0.65rem',
                    '@media (min-width: 1290px)': {
                        '&': {
                            fontSize: '1rem',
                            paddingLeft: '0.75rem',
                        }
                    },
                }
            },
            '&:nth-child(2)': {
                fontSize:'1rem',
                color: v.grey.dark,
                fontWeight: 800,
                marginLeft: '1rem',
                marginBottom: '1rem',
                ...fonts.secondaryFont
            }
        },
        '& ul': {
            marginLeft: '1rem',
            '& li': {
                '& a': {
                    display: 'block',
                    color: v.grey.med,
                    fontWeight: 100,
                    fontSize: '0.85rem',
                    marginBottom: '0.75rem',
                    textDecoration: 'none'
                }
            }
        }
    }
})



// @include keyframes (lineani){
//   to{
//     stroke-dashoffset:0;
//   }
// }
