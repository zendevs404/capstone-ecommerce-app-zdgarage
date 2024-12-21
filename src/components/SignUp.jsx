import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const title = "Sign Up";
const socialTitle = "Login with Social Media";
const btnText = "Register Now";

export const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // console.log(email, password, confirmPassword);

    if (password!== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }else{
        setErrorMessage("");
        createUser(email, password).then((userCredential) => {
            const user = userCredential.user;
            alert("Account created successfully!")
            navigate(from, {replace: true});
        }).catch((error) => {
            console.log(error.message);
            alert(`${error.message}`)
        })
    }
  }

  const handleRegister = () => {
    signUpWithGmail().then((result) => {
        const user = result.user;
        navigate(from, {replace: true});
    }).catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Please enter a valid Email and Password")
    })
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignup}>
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter Username"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email Address"
                  required
                />
                <div className="form-group mt-3">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                {errorMessage && (
                  <div className="error-message text-danger mb-1" role="alert">
                    {errorMessage}
                  </div>
                )}
              </div>

              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <Link to="/forgot-password">Forgot Password</Link>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>

            {/* account section */}
            <div className="account-bottom">
              <span>
                <span>Or</span>
              </span>

              {/* social login */}
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <button
                  className="github"
                  onClick={handleRegister}
                >
                  <i className="icofont-github"></i>
                </button>
                <button
                  className="facebook">
                  <i className="icofont-facebook"></i>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
