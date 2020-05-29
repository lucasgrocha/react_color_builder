import React, { useState } from 'react'
import RangeInputs from './RangeInputs/RangeInputs'
import BoxColor from './BoxColor/BoxColor'
import classes from './ColorPicker.module.css'

const ColorPicker = _ => {
  const [colors, setColors] = useState({
    red: 0,
    green: 0,
    blue: 0
  })

  const handleUpdatedColor = (color, value) => {
    const oldColors = {...colors}
    const updatedColors = oldColors
    updatedColors[color] = value
    setColors(updatedColors)
  }

  return (
    <div className={classes.ColorPicker}>
      <div className={classes.RangeInputs}>
        <RangeInputs updateColor={handleUpdatedColor} colors={colors} />
      </div>
      <div className={classes.BoxColor}>
        <BoxColor colors={colors} />
      </div>
    </div>
  )
}

export default ColorPicker