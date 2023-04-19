import React, { useState } from 'react'
import "../Component/css/quoraheader.css";
import CloseIcon from '@mui/icons-material/Close';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import {Modal} from "react-responsive-modal";
import 'react-responsive-modal/styles.css'
import "../Component/css/quora.css";
import { Avatar } from '@mui/material';

export const AddQues = () => {
  const [isModelOpen , setIsModelOpen] = useState(false);
  const Close = (<CloseIcon/>)
  const [inputUrl , setInputUrl] = useState('');
  return (
    <>
     
        <button onClick={()=> setIsModelOpen(true)} className='question-btn'>Add <br /> Question</button>
        <Modal 
          open = {isModelOpen}
          closeIcon = {Close}
          onClose={()=> setIsModelOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}

        

       >
            <div className="modal-title">
              
              <h5>Add Questions</h5>
              <h5>Sahare Link</h5>
            </div>
            <div className="modal-info">
              <Avatar className='avatar' />
              <div className="modal-scope">
                <PeopleAltIcon/>
                <p>Public</p>
                <ExpandCircleDownIcon/>
              </div>
            </div>
            <div className="modal-field">
              <input style={{

                margin : '5px 0px',
                border : '1px solid lightgray',
                padding : '10px',
                outline : '2px solid #000',
              
              }} type='text' placeholder='Ask question......'/>
              <div style={{
                display : 'flex',
                flexDirection : 'column',
              }}>

              <input value={inputUrl} onChange={(e)=> setInputUrl(e.target.value)} style={{
                margin : '5px 0px',
                border : '1px solid lightgray',
                padding : '10px',
                outline : '2px solid #000',
              }} type='text' placeholder='Link..'/>
             { inputUrl &&  <img  
              style={{height : '40vh'  ,width : '100%', objectFit : 'contain'}}
             src={inputUrl} alt="img" />}
              </div>
            </div>
            <div className="modal-btns">
              <button type='submit' className='add' >Add Question</button>
              <button className='cancel' onClick={()=> setIsModelOpen(false)}>Cancel</button>
            </div>
        </Modal>
    </>
  )
}
