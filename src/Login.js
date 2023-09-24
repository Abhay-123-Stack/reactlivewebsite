import React from "react";
import "./asset/style.css";
import { useEffect, useState } from "react";
import img1 from "./Image/images.png";
import { useHistory } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
function Login(props) {
  const history = useHistory();
  const [user, setUser] = useState({ UserName: "", Password: "" });
  const [message, setmessage] = useState("");

  const handleChange = (args) => {
    var copyOfCurrentUserInState = { ...user };
    copyOfCurrentUserInState[args.target.name] = args.target.value;
    setUser(copyOfCurrentUserInState);
  };

  useEffect(() => {
    if (message != "") {
      setTimeout(() => {
        setmessage("");
      }, 2000);
    }
  }, [message]);
  const clearBoxes = () => {
    setUser({ UserName: "", Password: "" });
  };

  const signIn = () => {
    if (user.UserName == "admin" && user.Password == "admin") {
      debugger;
      //Step 1: set the session state that says user is logged in now
      sessionStorage.setItem("isloggedin", "true");
      sessionStorage.setItem("userName", user.UserName);
      props.afterlogin();
      //Step 2: navigate user to Home page..
      history.push("/Donorlist");
    } else {
      clearBoxes();
      setmessage("Username / Password");
    }
  };

  return (
    <center>
      <MDBContainer>
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img src={img1} style={{ width: "170px" }} alt="logo" />
                <h4 className="mt-1 mb-5 pb-1">Admin Login</h4>
              </div>
              <div style={{ border: "1px solid black" }}>
                <center>
                  <p>Please login to your account</p>
                  <h5>Enter Username = admin & Password = admin</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td className="td">UserName:</td>
                        <td className="td">
                          <input
                            type="text"
                            name="UserName"
                            value={user.UserName}
                            onChange={handleChange}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td className="td">Password:</td>
                        <td className="td">
                          <input
                            type="password"
                            name="Password"
                            value={user.Password}
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="td">
                          <button className="btn btn-primary" onClick={signIn}>
                            Login
                          </button>
                        </td>
                        <td className="td">
                          <button
                            className="btn btn-danger"
                            onClick={clearBoxes}
                          >
                            Reset
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h6 style={{ color: "orangered" }}>{message}</h6>
                </center>
              </div>

              {/* <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/> */}

              {/* 
      <div className="text-center pt-1 mb-5 pb-1">
        <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={signIn}>Sign in</MDBBtn>
        <a className="text-muted" href="#!">Forgot password?</a>
      </div> */}
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">We are more than just a company</h4>
                <p class="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </center>
  );
}

export default Login;
