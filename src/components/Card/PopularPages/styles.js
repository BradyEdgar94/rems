import v from '../../../styles/atoms/_variables'
import fonts from '../../../styles/atoms/typography'
import globals from '../globals'

export default ({
    PopularPages: {
        ...globals.container
    },
    top: {
        ...globals.top,
        borderBottom: 'none'
    },
    labels: {
        '& p': {
            position: 'relative',
            width: '100%',
            padding: ['0 0 1rem 0'],
            borderBottom: `solid 1px ${v.grey.lightMed}`,
            textAlign: 'left',
            '& strong': {
                fontWeight: 700,
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                float: 'left',
                '&:first-child': {
                    marginLeft: '4.25rem'
                },
                '&:nth-child(2)': {
                    float: 'right',
                    marginRight: '25%'
                },
                '&:nth-child(3)': {
                    position: 'absolute',
                    right: '3rem',
                    top: 0,
                    '@media screen and (min-width: 993px)': {
                        right: '1.5rem'
                    }
                }
            }
        }
    },
    list: {
        width: '100%',
        height: '18rem',
        borderBottomLefttRadius: '0.75rem',
        borderBottomRightRadius: '0.75rem',
        overflow: 'auto',
        '@global': {
            'li': {
                position: 'relative',
                width: '100%',
                padding: '1.35rem 3rem 1.35rem 4.25rem',
                color: v.grey.med,
                backgroundColor: v.white,
                borderBottom: `solid 1px ${v.grey.lightMed}`,
                '&:nth-child(odd)': {
                    backgroundColor: '#FEFEFE'
                },
                '&:first-child': {
                    '& p': {
                        fontSize: '1.25rem',
                        '& em:first-child': {
                            float: 'right',
                            marginRight: '25.5%'
                        },
                        '@media screen and (max-width: 1190px) and (min-width: 993px)': {
                            fontSize: '1rem',
                            '& em:first-child': {
                                marginRight: '17%'
                            },
                        },
                        '@media screen and (min-width: 1190px)': {
                            '& em:first-child': {
                                marginRight: '30%'
                            },
                        }
                    }
                },
                '&:last-child': {
                    borderBottom: 'none'
                },
                '& img': {
                    position: 'absolute',
                    left: '1.75rem',
                    top: '1rem',
                    width: '1.5rem',
                    height: '1.5rem'
                },
                '& p': {
                    fontSize: '0.85rem',
                    '& em': {
                        fontStyle: 'normal',
                        color: v.dark,
                        '&:first-child': {
                            float: 'right',
                            marginRight: '27.5%',
                            '@media screen and (max-width: 1190px) and (min-width: 993px)': {
                                marginRight: '20%',
                            },
                            '@media screen and (min-width: 1190px)': {
                                marginRight: '33%',
                            }
                        },
                        '&:nth-child(2)': {
                            position: 'absolute',
                            right: '3rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            ...fonts.secondaryFont,
                            fontWeight: 700,
                            '@media screen and (max-width: 1190px) and (min-width: 993px)': {
                                right: '1.5rem'
                            },
                            '@media screen and (min-width: 1190px)': {
                                right: '1.5rem',
                            }
                        }
                    }
                }
            }
        }
    }
})
