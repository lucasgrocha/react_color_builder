import React from 'react'

const RangeInput = props => {

  const inputColors = (
    Object.keys(props.colors).map(colorKey => (
      <div key={colorKey}>
        <span>{colorKey}</span>
        <input type="range" min='0' max='255' onChange={evt => props.updatedColor(colorKey, evt.target.value)} />
        <span>{props.colors[colorKey]}</span>
      </div>
    ))
  )

  return(
    <div>
      {inputColors}
    </div>
  )
}

export default RangeInput