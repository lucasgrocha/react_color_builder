import React from 'react'

import styled from 'styled-components'

const StyledSpan = styled.span`
  display: inline-block;
  width: ${props => props.width};
`

const RangeInput = props => {

  const inputColors = (
    Object.keys(props.colors).map(colorKey => (
      <div key={colorKey}>
        <StyledSpan width='50px'>{colorKey}</StyledSpan>
        <input
          type="range"
          min='0'
          max='255'
          value={props.colors[colorKey]}
          onChange={evt => props.updatedColor(colorKey, evt.target.value)} />
        <StyledSpan width='30px'>{props.colors[colorKey]}</StyledSpan>
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