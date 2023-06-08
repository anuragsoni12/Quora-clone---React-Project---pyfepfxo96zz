import React from "react";
import { useState } from "react";
import "./css/formCss.css";
import { useEffect } from "react";

const boxStyle = {
  width: "60%",
  margin: "10px 0px",
  textAlign: "center",
  // border : '2px solid red',
  borderRadius: "10px",
  padding: "0px",
};
const inputFieldStyle = {
  width: "100%",
  padding: "5px",
  outline: "none",
  // border : 'none',
  border: "2px solid  #0d6efd",
  borderRadius: "10px",
  textAlign: "center",
  margin: "0px",
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
};
const modalBody = {
  // border : '2px solid red',
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "auto",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "#ededed",
  padding: "0px",
};
const boxParaStyle = {
  width: "60%",
  margin: "0px 0px -5px 0px",
  textAlign: "center",
  fontSize: "14px",
  // border : '2px solid red',
  borderRadius: "10px",
  padding: "0px 0px",
};
const AuthenticationComponent = (props) => {
  // console.log('authentication props' , props)
  const { loginStatus , handleClose, setAvatarName } = props;

  // console.log(userDataManageFn)
  const [signUp, setSignUp] = useState(false);
  const handleSignUpFn = () => {
    setSignUp(true);
  };
  const handleLoginFn = () => {
    setSignUp(false);
  };

  // ---------------------------------------------handleSignUpFormData-------------------------

  //------------------------------------localStorage----------------------------------------------

  let initialFormDataBase;
  if (localStorage.getItem("formDataBase") === null) {
    initialFormDataBase = [];
  } else {
    initialFormDataBase = JSON.parse(localStorage.getItem("formDataBase"));
  }

  const [formDataBase, setFormDataBase] = useState(initialFormDataBase);
  useEffect(() => {
    localStorage.setItem("formDataBase", JSON.stringify(formDataBase));
  }, [formDataBase]);

  //------------------------------------localStorage----------------------------------------------

  const initialFormData = {
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhoneNumber: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [formError, setFormError] = useState({});

  const handleFormDataFn = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
 
  };

  const handleFormSubmitFn = (e) => {
    e.preventDefault();
    let item = {};

    item.userName = formData.userName;
    item.userEmail = formData.userEmail;
    item.userPassword = formData.userPassword;
    item.userPhoneNumber = formData.userPhoneNumber;

    setFormError(validateError(item));

    setSignUp(false);
    //  setFinalFormData( [...finalFormData ,  formData]);

    setFormData(initialFormData);
  };
  const validateError = (formItem) => {
    let errorObj = {};
    if (!formItem.userName) {
      errorObj.userName = "*username require";
    }
    if (!formItem.userEmail) {
      errorObj.userEmail = "*email is require";
    }
    if (!formItem.userPassword) {
      errorObj.userPassword = "*password is require";
    }
    if (!formItem.userPhoneNumber) {
      errorObj.userPhoneNumber = "*number is require";
    } else {
      setFormDataBase([...formDataBase, formItem]);
    }
    return errorObj;
  };

  // ---------------------------------------------handleSignUPFormData-------------------------

  //-------------------------------------handleLoginFormFn---------------------------------

  const initialLogin = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLogin);
  const [loginError, setLoginError] = useState({});

  const handleLoginInputFn = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  let db = JSON.parse(localStorage.getItem("formDataBase"));
  const [welComeUserName , setwelComeUserName ] = useState("")
  const [welComeMessage, setwelComeMessage] = useState(false);
  const handleSubmitLoginFn = (e) => {
    e.preventDefault();
    setLoginError(validateLogin(loginData));
    // eslint-disable-next-line array-callback-return
    db.map((item) => {
      if (
        item.userEmail === loginData.email &&
        item.userPassword === loginData.password
      ) {
        // setwelComeMessage(`Hello!! ${item.userName}`);
        setwelComeUserName(`Hello!! ${item.userName}`)
        setwelComeMessage(true);
        setLoginData(initialLogin);
        setAvatarName(item.userName);
        
        loginStatus();
      } else {
        
        setwelComeUserName("Invalid User's Email and Password");
        setwelComeMessage(false);
      }
    });
  };
  if(welComeMessage){

    setTimeout(()=>{
      handleClose();
    },1000)
  }
  const validateLogin = (loginData) => {
    let errorObj = {};

    if (!loginData.email) {
      errorObj.email = "*email is require";
    }
    if (!loginData.password) {
      errorObj.password = "*password is require";
    }

    return errorObj;
  };

  //-------------------------------------handleLoginFormFn---------------------------------

  return (
    <div style={modalBody}>
      {
        welComeMessage ?  <h4 style={{
          fontSize : '20px',
          marginTop : '10px',
          color : '#0d6efd',
          fontWeight : '600',
     }}> {welComeUserName} </h4> : <h4 style={{
      fontSize : '20px',
      marginTop : '10px',
      color : 'red',
      fontWeight : '600',
     }} >{welComeUserName}</h4>
      }
     
     

      {!signUp ? (
        <>
          <div className="box" style={boxStyle}>
            <input
              style={inputFieldStyle}
              type="text"
              placeholder="Useremail"
              name="email"
              value={loginData.email}
              onChange={handleLoginInputFn}
            />
          </div>
          <p className="errorText">{loginError.email && loginError.email}</p>

          <div className="box" style={boxStyle}>
            <input
              style={inputFieldStyle}
              type="text"
              placeholder="Userpassword"
              name="password"
              value={loginData.password}
              onChange={handleLoginInputFn}
            />
          </div>
          <p className="errorText">
            {loginError.password && loginError.password}
          </p>

          <div className="box" style={boxParaStyle}>
            <p>
              By continuing, you agree to Quora's Terms of Use and Privacy
              Policy.
            </p>
            
          </div>
          <div className="box" style={boxStyle}>
            <button
              className="signInbtn loginBtn"
              onClick={handleSubmitLoginFn}
           
            >
              Login
            </button>
          </div>
          <div className="box" style={boxStyle}>
            <p
              style={{
             
                borderRadius: "10px",
                padding: "8px",
                
                textTransform: "upperCase",
                margin: "0px 0px",
                
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
              }}
            >
              Or
            </p>
          </div>
          <div className="box" style={boxStyle}>
            <p
              style={{
                fontSize: "18px",
              }}
            >
              Don't have an account ?{"  "}
              <button
                style={{
                  fontSize: "16px",
                  color: "#fff",
                  backgroundColor: "#0d6efd",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "10px",
                
            
            
                }}
                onClick={handleSignUpFn}
              >
                Sign Up
              </button>
            </p>
          </div>
        </>
      ) : (
        <>
          {/* ----------------------------------------------- */}
          {/* -----------------------------------Inputs----------------------------- */}
          
          <div className="box" style={boxStyle}>
            <input
              style={inputFieldStyle}
              type="text"
              placeholder="UserName"
              name="userName"
              value={formData.userName}
              onChange={handleFormDataFn}
            />
          </div>
          <p className="errorText">
            {formError.userName && formError.userName}
          </p>

          <div className="box" style={boxStyle}>
            <input
              style={inputFieldStyle}
              type="text"
              placeholder="Email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleFormDataFn}
            />
          </div>
          <p className="errorText">
            {formError.userEmail && formError.userEmail}
          </p>

          <div className="box" style={boxStyle}>
            <input
              style={inputFieldStyle}
              type="text"
              placeholder="Password"
              name="userPassword"
              value={formData.userPassword}
              onChange={handleFormDataFn}
            />
          </div>
          <p className="errorText">
            {formError.userPassword && formError.userPassword}
          </p>

          <div className="box" style={boxStyle}>
            <input
              style={inputFieldStyle}
              type="text"
              placeholder="Number"
              name="userPhoneNumber"
              value={formData.userPhoneNumber}
              onChange={handleFormDataFn}
            />
          </div>
          <p className="errorText">
            {formError.userPhoneNumber && formError.userPhoneNumber}
          </p>

          {/* -----------------------------------Inputs----------------------------- */}

          <div className="box" style={boxStyle}>
            <button
              className="signInbtn"
              style={{}}
              onClick={handleFormSubmitFn}
            >
              SignIn
            </button>
          </div>
          <div className="box" style={boxStyle}>
            <p
              style={{
                
                borderRadius: "10px",
                padding: "8px",
                textTransform: "upperCase",
                margin: "0px 0px",
                boxShadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
              }}
            >
              Or
            </p>
          </div>
          <div className="box" style={boxStyle}>
            <p
              style={{
                fontSize: "18px",
              }}
            >
              Already have an account ?{"  "}
              <button
                style={{
                  fontSize: "16px",

                  color: "#fff",
                  backgroundColor: "#0d6efd",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "10px",
                  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
                }}
                onClick={handleLoginFn}
              >
                Login
              </button>
            </p>
          </div>

          {/* ----------------------------------------------- */}
        </>
      )}
    </div>
  );
};

export default AuthenticationComponent;
