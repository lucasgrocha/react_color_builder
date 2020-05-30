import React, { useState } from 'react'
import RangeInputs from './RangeInputs/RangeInputs'
import BoxColor from './BoxColor/BoxColor'
import classes from './ColorPicker.module.css'
import Notification from '../../components/Notification/Notification'

const ColorPicker = _ => {
  const [copied, setCopied] = useState(false)
  const [colors, setColors] = useState({
    red: 0,
    green: 0,
    blue: 0
  })

  const handleUpdatedColor = (color, value) => {
    const oldColors = { ...colors }
    const updatedColors = oldColors
    updatedColors[color] = value
    setColors(updatedColors)
  }

  const handleCopied = _ => {
    setCopied(true)
  }

  const handleUncopy = _ => {
    setCopied(false)
  }

  return (
    <>
    {
      copied &&
      <Notification
        uncopy={handleUncopy}
        title='Copied to clipboard!'
        content='Now paste wherever you want! :D' />
    }
      <div className={classes.ColorPicker}>
        <div className={classes.RangeInputs}>
          <RangeInputs updateColor={handleUpdatedColor} colors={colors} />
        </div>
        <div className={classes.BoxColor}>
          <BoxColor colors={colors} copied={handleCopied} />
        </div>
      </div>
    </>
  )
}

export default ColorPicker