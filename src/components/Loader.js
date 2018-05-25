import React from 'react'
import loaderSrc from '../assets/200_d.gif'

const Loader = props => (
  <div>
    <img
      style={{width: 80}} 
      alt='Loader icon'
      src={loaderSrc}
    />
  </div>
)

export default Loader