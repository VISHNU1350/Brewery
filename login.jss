import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { googleLogout, useGoogleLogin, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import TextCarousel from "./TextCarousel";
import "./Login.css";
import axios from "axios";
import { addUser } from "../../Store/reducers/loginReducer";
import EyeIcon from "./Images/EyeIcon";
import EyeCloseIcon from "./Images/EyeCloseIcon";
import EnvelopeIcon from "./Images/EnvelopeIcon";
import ArrowRIghtIcon from "./Images/ArrowRIghtIcon";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getReq , getLogin, postReq} from "../../Api/api";

import encode from "jwt-encode";
import Toast,{handleErrorToast,handleSuccessToast} from "../Toast";


let md5 = require('md5');
// const sign = require('jwt-encode');

const Login = () => {
  let Url = process.env.REACT_APP_URL;
  const [username, setUsername] = useState("");
  const [user, setUser] = useState([]);
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("management");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState([]);
  let data;
  let dispatch = useDispatch();
  let navigate = useNavigate();

const handleTogglePassword = () => {
  setShowPassword(!showPassword);
};

const handleForgotPassword = () => {
  //console.log("Forgot Password clicked");
};

const handleLogin = async () => {
  let uname=username.toLowerCase();
  if(uname==="" ){
    
    handleErrorToast("Please Enter valid Email")
    return;
  }

  else if(password==="" ){
    handleErrorToast("Please Enter Password")
    return;
  }
  // const hash = md5(password); // Hash the password using MD5
  const data = await getLogin(`${Url}loginByPassword/${username}/${password}`); // Pass hashed password to the login endpoint
  if (data?.data?.message==="incorrect-password")
  handleErrorToast("Please enter a valid Credentials")
  else navigate("/search")
  //console.log("hello world", data);
  // if (data?.data && data?.data?.empRoleName) {
  //   dispatch(addUser(data.data));
  //   if (data?.data?.empRoleName === "HR Manager") {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/faq");
  //   }
  // } else {
  //   navigate("/");
  // }
};

return (
  <main id="loginScreen">
    <Toast></Toast>
    <Container fluid className="g-0">
      <Row className="g-0 h-100vh">
        <Col lg={6} className="d-lg-block d-none">
          <div className="login-left">
            <div className="login-content">
              <h1>Welcome Back! </h1>
              <h3 className="mb-4">Brewery Blog</h3>
            </div>
            <div className="login-navigation">
             
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="login-right">
            <div className="auth-screen h-100vh login-form">
              <h2>Sign In</h2>
              <p>Brewery</p>
              <Form>
                <InputGroup className="mb-4">
                  <Input
                    type="email"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                   
                  />
                  <InputGroupText className="input-icon">
                    <EnvelopeIcon />
                  </InputGroupText>
                </InputGroup>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroupText
                    className="input-icon"
                    onClick={handleTogglePassword}
                  >
                    {showPassword ? <EyeCloseIcon /> : <EyeIcon />}
                  </InputGroupText>
                </InputGroup>
                {/* <div className="d-flex justify-content-between align-items-center my-4">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                      />
                      Remember Me
                    </Label>
                  </FormGroup>
                
                </div> */}
                <button

                  className="btn button-primary button-icon w-100 w-lg-50 mx-auto py-2 mt-4"
                  type="button"
                  onClick={handleLogin}
                >
                  Login 
             
                </button>
              
              </Form>
              <br></br>
              
            </div>
           
          </div>
        </Col>
      </Row>
      <Toast/>
    </Container>
  </main>
);
};

export default Login;
