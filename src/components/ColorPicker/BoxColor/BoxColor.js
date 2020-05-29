import React from 'react'

import classes from './BoxColor.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components'

const StyledCopyToClipBoard = styled(CopyToClipboard)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const boxColor = props => {
  const rgb = `rgb(${props.colors['red']}, ${props.colors['green']}, ${props.colors['blue']})`

  return (
    <div style={{backgroundColor: rgb}} className={classes.BoxColor}>
      <StyledCopyToClipBoard text={rgb} onCopy={() => alert('Copied to clipboard')}>
          <span>{rgb}</span>
      </StyledCopyToClipBoard>
    </div>
  )
}

export default boxColor