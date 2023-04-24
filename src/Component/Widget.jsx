import React from 'react'

export const Widget = () => {
  const Widgets = {
   
      width : '100%',
      display  : 'flex',
      flexDirection : 'column',
      alignItems: 'center',
      // border : '2px solid red',
    }
    const WidgetImage = {
      margin : '15px',
      // border : '2px solid green',
    width : '90%',
    height  : '400px'
  
  }
  const Text = {
    width : '100%',
    // height : '45px',
    border : '2px solid #aaa',
    textAlign : 'center',
    textTransform : 'upperCase',
    padding : '10px 0px 0px 0px',
  }
  
  return (
    <div className='widgets' style={Widgets}>
        <div className='widget' style={WidgetImage}>
          <img style={{width : '100%' , height : '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Zc6ixTELEsJ13NIKY2V2kJZDv02rM66zaw&usqp=CAU" alt="" />
        </div>
        <div className='widget' style={WidgetImage}>
          <img style={{width : '100%' , height : '100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUoUL9mxn46awUMfRt_DS_Ei1ca3NgbrRVQ&usqp=CAU" alt="" />
        </div>
        <div style={Text}>
          <p>Advertisement</p>
        </div>
    </div>
  )
}
