import React from 'react'

import '../Component/css/feed.css';
import { Post } from './Post';
import { QuoraBox } from './QuoraBox';
export const Feeds = () => {
  return (
    <div className='feed'>
     
      <QuoraBox/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}
