import React from 'react'
import classes from './page-title.module.css'
import { Helmet } from 'react-helmet-async'

const PageTitle = ({ title, description, keywords }) => {

  return (
    <h1 className={classes.title}>
      {title}
      <Helmet>
        <title>{title} - Faisal Rashid</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
    </h1>
  )
}

export default PageTitle
