export default ({
    dashboard: {
        minHeight: 'calc(100vh - 6rem)',
        '& .row .averageVisits, & .row .account': {
            '@media screen and (max-width: 800px)': {
                width: '100%'
            }
        }
    }
})
