import v from '../../../styles/atoms/_variables'
import _assets from '../../../statics/icons/assets.svg'
import _api from '../../../statics/icons/api.svg'
import _files from '../../../statics/icons/files.svg'
import _hook from '../../../statics/icons/hook.svg'
import _model from '../../../statics/icons/model.svg'
import _dashboard from '../../../statics/icons/dashboard.svg'
import _sitemap from '../../../statics/icons/sitemap.svg'

export default ({
    aside: {
        overflow: 'hidden',
        width: '100%',
        height: 0,
        backgroundColor: v.white,
        transition: 'width 0.25s ease-in-out',
        '@media screen and (min-width: 460px)': {
            position: 'fixed',
            left: 0,
            top: '5.85rem',
            width: '5rem',
            height: 'calc(100% - 5.75rem)',
        },
        '@media screen and (min-width: 993px)': {
            width: '14rem'
        }
    },
    nav: {
        color: 'inherit',
        backgroundColor: 'inherit',
        width: '100%',
        height: 'auto',
        lineHeight: 'inherit',
        boxShadow: 'none',
        '@global': {
            'li': {
                borderBottom: `solid 1px ${v.grey.lightMed}`,
                listStyleType: 'none',
                '& a': {
                    position: 'relative',
                    display: 'block',
                    fontSize: '0',
                    padding: ['2.5rem', '1rem', '2.5rem', '4rem'],
                    textDecoration: 'none',
                    color: v.grey.med,
                    transition: 'text-indent 0.25s ease-in-out, color 0.25s ease-in-out, font-size 0.25s ease-in-out',
                    '@media screen and (min-width: 993px)': {
                        padding: ['1.5rem', '1rem', '1.5rem', '4rem'],
                        fontSize: '1rem'
                    },
                    '&:hover': {
                        textIndent: '0.6rem',
                        color: v.dark,
                        '&:before': {
                            filter: 'invert(100%)',
                            backgroundPosition: '0.6rem center',
                        },
                        '&:after': {
                            width: '0.35rem'
                        }
                    },
                    '&.active': {
                        textIndent: '0.6rem',
                        color: v.dark,
                        '&:before': {
                            backgroundPosition: '0 center !important',
                            filter: 'invert(0) !important'
                        },
                        '&:after': {
                            width: '0.35rem',
                            background: `${v.primary.lightGradientVertical} !important`,
                        }
                    },
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '2rem',
                        transform: 'translateY(-50%)',
                        backgroundSize: '1.25rem',
                        width: '2rem',
                        height:'1.25rem',
                        backgroundPosition: '0 center',
                        backgroundRepeat: 'no-repeat',
                        transition: 'background-position 0.25s ease-in-out, filter 0.25s ease-in-out'
                    },
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 0,
                        background: v.dark,
                        height:'100%',
                        transition: 'width 0.25s ease-in-out'
                    }
                },
                '&:first-child': {
                    borderTop: `solid 1px ${v.grey.lightMed}`,
                    '& a': {
                        '&:before': {
                            backgroundImage: `url(${_dashboard})`
                        }
                    }
                },
                '&:nth-child(2)': {
                    '& a': {
                        '&:before': {
                            backgroundImage: `url(${_sitemap})`
                        }
                    }
                },
                '&:nth-child(3)': {
                    '& a': {
                        '&:before': {
                            backgroundImage: `url(${_hook})`
                        }
                    }
                },
                '&:nth-child(4)': {
                    '& a': {
                        '&:before': {
                            backgroundImage: `url(${_model})`
                        }
                    }
                },
                '&:nth-child(5)': {
                    '& a': {
                        '&:before': {
                            backgroundImage: `url(${_files})`
                        }
                    }
                },
                '&:nth-child(6)': {
                    '& a': {
                        '&:before': {
                            backgroundImage: `url(${_assets})`
                        }
                    }
                },
                '&:nth-child(7)': {
                    '& a': {
                        '&:before': {
                            backgroundImage: `url(${_api})`
                        }
                    }
                },
            }
        }
    }
})
