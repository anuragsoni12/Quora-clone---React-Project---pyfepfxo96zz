import React from "react";
import AuthenticationComponent from "./ModalBody";

const loginContainer = {
  width: "100%",
  height: "95vh",
  backgroundColor: "#ededed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const loginComponent = {
  width: "33%",
  // height: "50%",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
};
const LoginComponent = (props) => {
  const { handleLoginStatusFn, setAvatarName } = props;
  return (
    <div style={loginContainer}>
      <div style={loginComponent}>
        <h2
          style={{
            color: "#0d6efd",
            fontSize: "45px",
            padding: "20px 0px 0px 0px",
          }}
        >
          Quora
        </h2>

        <AuthenticationComponent
          handleLoginStatusFn={handleLoginStatusFn}
          setAvatarName={setAvatarName}
        />
      </div>
    </div>
  );
};

export default LoginComponent;
