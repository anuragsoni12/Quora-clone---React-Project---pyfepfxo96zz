import React from 'react'

import SearchIcon from '@mui/icons-material/Search';
export const InputField = () => {
  return (
    <div>
        <div className='Search-field'>
             
        <SearchIcon style={{borderRadius : '50%' ,  backgroundColor : '#fff' ,width : '30px' , height : '30px' , padding : '4px' , color : '#aaa'  }}/>
        <input type="text" style={{width:'80%', margin:'2px 0px 2px 10px', height : '75%' , background:'#aaa', border:'none' , outline : 'none' , fontSize : '20px'  }} placeholder='search for questions...' />
        </div>
    </div>
  )
}
