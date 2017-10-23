// import perdido from 'perdido'
// perdido.flex = true;

export default ({
    '.container': {
        '@media only screen and (min-width: 993px)': {
            width: '90%',
            paddingTop: '4%',
            paddingBottom: '4%'
        }
    },
    '.row': {
        marginBottom: '1rem',
        '& .col': {
            marginBottom: '1.25rem'
        }
    }
})

// ...perdido.column('1/12'),
