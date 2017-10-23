import v from './atoms/_variables'
import normalize from './atoms/normalize'
import typography from './atoms/typography'
import clickables from './atoms/clickables'
import structure from './atoms/structure'
import inputs from './atoms/inputs'

export default ({
    main: {
        '@global': {
            ...normalize,
            ...typography,
            ...clickables,
            ...structure,
            ...inputs
        },
        background: v.light,
        marginTop: '6rem',
        paddingLeft: 0,
        transition: 'padding-left 0.25s ease-in-out',
        '@media screen and (min-width: 460px)': {
            paddingLeft: '5rem'
        },
        '@media screen and (min-width: 993px)': {
            paddingLeft: '14rem'
        }
    }
})
