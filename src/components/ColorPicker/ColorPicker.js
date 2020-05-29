import React, { useState } from 'react'
import RangeInputs from './RangeInputs/RangeInputs'

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
    <RangeInputs updateColor={handleUpdatedColor} colors={colors} />
  )
}

export default ColorPicker