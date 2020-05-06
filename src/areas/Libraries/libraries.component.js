import React from 'react'
import LibraryThumbnail from './library-thumbnail/library-thumbnail.component'
import classes from './libraries.module.css';
import ReactIf from '../../common/react-if/react-if.component';
import { withRouter } from 'react-router';
import PageTitle from '../../common/page-title/page-title.component';

console.log('hello')

const Libraries = ({ maxCount, isLanding, ...props }) => {
  const librariesArr = [
    { title: 'fs-lightbox', url: 'https://github.com/FaisalST32/fs-lightbox', description: 'A simple lightbox for your image gallery' },
    { title: 'fs-toast', url: 'https://github.com/FaisalST32/fs-toast', description: 'A simple no-dependency JavaScript library for showing toast notifications' },
    { title: 'fs-scrollanimate', url: 'https://github.com/FaisalST32/fs-scrollanimate', description: 'A lightweight JavaScript library to animate elements on scroll' }
  ]

  maxCount = maxCount ? maxCount : librariesArr.length;

  let librariesHtml = librariesArr.slice(0, maxCount).map(library => {
    return <LibraryThumbnail key={library.title} library={library} />
  })
  return (
    <div className="content-container">
      <ReactIf showIf={!isLanding}>
        <PageTitle title="Libraries" />
      </ReactIf>
      <div className={classes.Library}>{librariesHtml}</div>
      <ReactIf showIf={isLanding}>
        <div onClick={() => { props.history.push('/libraries') }} className="more-content">view all libraries<span role="img" aria-label="link">&nbsp;&rarr;</span></div>
      </ReactIf>
    </div>
  )
}

export default withRouter(Libraries);
