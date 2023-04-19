import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { InputField } from './InputField';
import { AddQues } from './AddQues';
// import { AnsQues } from './AnsQues';
export const Header = () => {


    return (
        <div className='header-container'>
            <div className='conatiner'>     
            <div>
                <Link to='/'><Logo/></Link>
                
            </div>
            <div>
                <InputField />
            </div>   
            <div>
              <AddQues/>
               
            </div>
           
            
            </div>
        </div>
    )   
}
