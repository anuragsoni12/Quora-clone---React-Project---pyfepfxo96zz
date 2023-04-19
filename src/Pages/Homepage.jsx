import React from 'react';
import '../Component/css/quora.css';
import { Feeds } from '../PagesInsideHome/Feeds';


import {Sidebar} from '../PagesInsideHome/Sidebar';

import { Widget } from '../PagesInsideHome/Widget';
export const Homepage = () => {
  return (
    <div className='quora'>
      <div className="quora-contents">

        <Sidebar/>
      <Feeds/>
        <Widget/>
      </div>
    
    </div>
  )
}
