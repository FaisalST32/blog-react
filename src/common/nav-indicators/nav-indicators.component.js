import React from 'react'
import classes from './nav-indicators.module.css';

const NavIndicators = ({count, activeIndex, setIndicator}) => {
  let indicatorHtml = null;
  if (count) {
    indicatorHtml = Array(count).fill(0).map((item, i) => {
      let indicatorClasses = [classes.indicator];
      if (i === activeIndex - 1) {
        indicatorClasses.push(classes.active)
      }
      return <div key={i} className={indicatorClasses.join(' ')} onClick={() => {setIndicator(i + 1)}}>&#11044;</div>
    })
  }
  return (
    <div className={classes.navIndicators}>
      {indicatorHtml}
    </div>
  )
}

export default NavIndicators
