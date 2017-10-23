export default ({
    '*': {
      boxSizing: 'border-box'
  },
  '.fixed-action-btn.horizontal ul': {
      marginRight: '-2.25rem',
      '& li': {
          marginTop: 0
      }
  },
  '.btn-floating': {
      width: '30px',
      height: '30px',
      '& i': {
          position: 'relative',
          top: '-0.3rem',
          fontSize: '1rem',
          lineHeight: '30px'
      }
  }
})
