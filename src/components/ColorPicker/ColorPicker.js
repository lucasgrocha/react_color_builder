import React, { useState, Fragment } from 'react'
import RangeInputs from './RangeInputs/RangeInputs'
import BoxColor from './BoxColor/BoxColor'

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
    <Fragment>
      <RangeInputs updateColor={handleUpdatedColor} colors={colors} />
      <BoxColor colors={colors} />
    </Fragment>
  )
}

export default ColorPicker