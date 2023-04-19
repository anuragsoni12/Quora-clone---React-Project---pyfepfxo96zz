import { Avatar } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import React,(createContext)
import {Modal} from "react-responsive-modal";
import 'react-responsive-modal/styles.css'
import '../Component/css/post.css';
import { useState } from 'react';
// import { data } from '../Data/data';
import CloseIcon from '@mui/icons-material/Close';
import "../Component/css/quoraheader.css";
import "../Component/css/quora.css";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
export const Post = () => {

  const [isModelOpen , setIsModelOpen] = useState(false);
  
  const Close = (<CloseIcon/>)
  return (
    <div className='post'>
       {/* {
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
       } */}
       <div className='post-info' >
          <Avatar/>
          <h3>Rahul Kumar</h3>
          {/* <p>Time stamp</p> */}
       </div>
       <div className='post-body'>
        <div className='post-question'>
          <p>What is the color of sky?</p>

          <button onClick={()=> setIsModelOpen(true)} className='post-btn-answer'>Answers</button>
          <Modal
           open = {isModelOpen}
           closeIcon = {Close}
           onClose={()=> setIsModelOpen(false)}
           closeOnEsc
           center
           closeOnOverlayClick={false}
           styles={{
            overlay : {
              height : 'auto',
            },
           }}
 
          >
            <div className='modal-question'>
                <h1 style={{color : 'red', fontSize : '45px'}}>This is test question</h1>
                <p>asked by <span>UserName</span></p>
            </div>
            <div className='modal-answer'>
              <ReactQuill placeholder='Enter your answer'/>
             </div>
           <div className='modal-btns'>
           <button type='submit' className='add' >Add Question</button>
              <button className='cancel' onClick={()=> setIsModelOpen(false)}>Cancel</button>
           </div>
          </Modal>
        </div>
       </div>
       <div className='post-footer'>
        <div className='post-footer-actions'>
              <ArrowUpwardIcon />
              <ArrowDownwardIcon />
        </div>
              <RepeatIcon/>
              <ChatBubbleOutlineIcon/>
        
       </div>
       <p style={{
        color : '#a2a2a2',
        fontSize : '12px',
        fontWeight : 'bold'
       }}>1 Answer</p>

       <div style={{
        margin : "5px 0px 0px 0px",
        padding : '5px 0px 0px 20px'
        , borderTop : '1px solid lightgray'
       }} className='post-answers'>
        <div
          style={{
            display : 'flex',
            flexDirection : 'column',
            width : '100%',
            padding : '10px 5px',
            // border : '1px solid red'
          }}
        className='post-answer-container'>
          <div
          
          style={{
            display : 'flex',
            alignItems : 'center',
            
            // border : '2px solid black',
            padding : '10px 10px',
           marginBottom : '10px',
            fontSize : '12px',
           fontWeight : '600',
            
          }}
          className='post-answerd'>
            <Avatar/>
            <div 
            style={{
              margin : '0px 10px'
            }}
            className="post-info">
              <p>John</p>
             
            </div>
          </div>
          <div className="post-answer">
            The sky is of color blue. The color is blue becauuse of the Raman effect. 
          </div>
        </div>
       </div>
    </div>
  )
}


