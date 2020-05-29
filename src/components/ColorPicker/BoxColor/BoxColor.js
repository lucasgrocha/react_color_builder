import React from 'react'

import classes from './BoxColor.module.css'

const boxColor = props => {
  const rgb = `rgb(${props.colors['red']}, ${props.colors['green']}, ${props.colors['blue']})`

  return (
    <div style={{backgroundColor: rgb}} className={classes.BoxColor}>
      {rgb}
    </div>
  )
}

export default boxColor