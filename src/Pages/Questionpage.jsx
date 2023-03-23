import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import '../Component/css/ques.css';




 
export const Questionpage = () => {
  


  const [ques , setQues] = useState({});
  const [data , setData] = useState([]);



  const initial = {
    question : '',
  }

  function AddQuestionFn(){
    // console.log('ques', ques)
    
    setData([...data, ques]);
    setQues(ques);
    setQues(initial)
  }
  function CancelQuestionFn(){
    setQues(initial)

  }
  return (

    
    <div className='question-page-box'>
        <div className='question-page'>
            <div className='question-page-input'>
              
                  <h3>Question:</h3>
                  <input type="text" style={{width:'85%' , backgroundColor :'white' , outline : 'none' , border : 'none', fontSize : '25px'}} onChange={(e)=> {setQues({...ques , question : e.target.value})}} value={ques.question} />

                
            </div>
            <div className='question-page-btn'>
                <button className='ques-btn'onClick={CancelQuestionFn}>Cancel</button>
                <button className='ques-btn' onClick={AddQuestionFn}>Add Question</button>
            </div>
            <div className='question-page'>
            <div className='question-feeds'>
              
       {
         data.map((item)=>(
          <div className='post'>
            <div className="post-info">
            <div className="post-avatar">
                <Avatar/>
                <h4>UserName</h4>
             
            </div>
            <div className="post-body">
                <p>{item.question}</p>
                
            </div>
          
        </div>
    </div>
        ))
       }
            </div>
            </div>
        </div>
        
    </div>
   
 
   
  )
}
