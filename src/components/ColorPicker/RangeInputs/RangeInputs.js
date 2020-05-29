import React from 'react'
import RangeInput from './RangeInput/RangeInput'

const rangeInputs = props => (
  <RangeInput updatedColor={props.updateColor} colors={props.colors} />
)

export default rangeInputs