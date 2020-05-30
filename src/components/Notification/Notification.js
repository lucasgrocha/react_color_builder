import React, { useState } from 'react'
import classes from './Notification.module.css'
import 'animate.css'

const Notification = props => {
  const [disposed, setDisposed] = useState(false)

  const handleDisposeNotification = _ => {
    setDisposed(true)
    props.uncopy()
  }

  return (
    !disposed ?
    <div className={`animate__animated animate__fadeInUp ${classes.Notification}`} onClick={() => handleDisposeNotification() }>
      <h1>{props.title || 'Title'}</h1>
      <h3>{props.content || 'Content'}</h3>
    </div>
    : null
  )
}

export default Notification