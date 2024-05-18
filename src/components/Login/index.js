import {useEffect, useState} from 'react'
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import './index.css'

const Image =
  'https://boldist.co/wp-content/uploads/2023/06/What-Is-Social-Login-and-Does-Your-Business-Need-It_.jpg'
const Logo = 'https://i.pngimg.me/thumb/f/720/m2H7K9H7A0H7d3b1.jpg'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="image" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword)
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword)
                    }}
                  />
                )}
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button">Log In</button>
                <button type="button">
                  <FcGoogle />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
