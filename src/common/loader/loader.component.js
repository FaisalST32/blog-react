import React from 'react'
import classes from './loader.module.css'
import ReactIf from '../react-if/react-if.component';

const Loader = ({ showIf, message }) => {
  message = message ?? 'Loading...';
  return (
    <ReactIf showIf={showIf}>
      <div className={classes.Loader}>
        <div className={classes.spinnerContainer}>
          <span className={classes.spinner}></span>
          <span className={classes.message}>{message}</span>
        </div>
      </div>
    </ReactIf>
  )
}

export default Loader
