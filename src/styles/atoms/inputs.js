import v from './_variables'
import fonts from './typography'

export default ({
    'input': {
        '&.lg': {
            ...fonts.secondaryFont,
            color: v.dark,
            fontSize: '2rem',
            fontWeight: 800,
            textTransform: 'uppercase'
        }
    },
    'input:not([type]):focus:not([readonly]), input[type=text]:not(.browser-default):focus:not([readonly]), input[type=password]:not(.browser-default):focus:not([readonly]), input[type=email]:not(.browser-default):focus:not([readonly]), input[type=url]:not(.browser-default):focus:not([readonly]), input[type=time]:not(.browser-default):focus:not([readonly]), input[type=date]:not(.browser-default):focus:not([readonly]), input[type=datetime]:not(.browser-default):focus:not([readonly]), input[type=datetime-local]:not(.browser-default):focus:not([readonly]), input[type=tel]:not(.browser-default):focus:not([readonly]), input[type=number]:not(.browser-default):focus:not([readonly]), input[type=search]:not(.browser-default):focus:not([readonly]), textarea.materialize-textarea:focus:not([readonly])': {
        borderBottom: `1px solid ${v.primary.dark}`,
        boxShadow: `0 1px 0 0 ${v.primary.dark}`
    }
})
