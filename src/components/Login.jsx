import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, replace, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const title = "Login";
const socialTitle = "Login with Social Media";
const btnText = "Login Now";

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(form);
    const email = form.email.value;
    const password = form.password.value;
    login(email, password).then((result) =>{
        const user = result.user;
        alert("Login successful")
        navigate(from, {replace: true})
    }).catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Please enter a valid Email and Password")
    })
  };

  const handleRegist = () => {
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
            <form className="account-form" onSubmit={handleLogin}>
                <div className="form-group">
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
                    {
                        errorMessage && (
                        <div className="error-message tex-danger mb-1" role="alert">
                            {errorMessage}
                        </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                        <div className="checkgroup">
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <Link>Forgot Passsword</Link>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="d-block lab-btn">
                    <span>{btnText}</span>
                    </button>
                </div>
                </div>
            </form>

            {/* account section */}
            <div className="account-bottom">
                <span className="d-block cate pt-10">
                    Don't Have any Account? <Link to="/sign-up">Sign Up</Link>
                </span>
                <span>
                    <span>Or</span>
                </span>

                {/* social login */}
                <h5 className="subtitle">{socialTitle}</h5>
                <ul className="lab-ul social-icons justify-content-center">
                    <button className="github" onClick={handleRegist}><i className="icofont-github"></i></button>
                    <button className="facebook"><i className="icofont-facebook"></i></button>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Login;
