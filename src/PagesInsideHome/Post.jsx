import { Avatar } from '@mui/material';


// import React,(createContext)
import '../Component/css/post.css';
import { data } from '../Data/data';



export const Post = () => {


  

  return (
    <div className='post'>
       {
        data.map((item)=>(
            <div className="post-info"> 
            <div className="post-avatar">
                <Avatar/>
                <h4>{item.name}</h4>
             
            </div>
            <div className="post-body">
                <p>{item.question}</p>
                
            </div>
            <div className="post-answer">
                <p>{item.answer}</p>
            </div>              
        </div>
        ))
       }
    </div>
  )
}


