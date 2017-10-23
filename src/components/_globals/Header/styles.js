import v from '../../../styles/atoms/_variables'

export default ({
    header: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10,
        backgroundColor: v.white,
        overflow: 'hidden',
        padding: ['1rem', 0, '1rem', '4rem']
  },
  logo: {
      float: 'left',
      width: '5rem'
  },
  rightContainer: {
      position: 'relative'
  },
  profile: {
      position: 'absolute',
      right: '4rem'
  }
})
