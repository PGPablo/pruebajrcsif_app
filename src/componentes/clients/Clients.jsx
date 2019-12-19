// LIBS
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ASSETS
import '../../estilos/Blog.css'

const Blog = () => (
  <div className="container border shadow mt-4">
    <form className="login100-form validate-form">
      <span className="login100-form-title p-b-59">
        Sign Up
      </span>

      <div className="wrap-input100 validate-input" data-validate="Username is required">
        <span className="label-input100">Username</span>
        <input className="input100" type="text" name="username" placeholder="Username..." />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input" data-validate = "Password is required">
        <span className="label-input100">Password</span>
        <input className="input100" type="text" name="pass" placeholder="*************" />
        <span className="focus-input100"></span>
      </div>

      <div className="container-login100-form-btn">
        <div className="wrap-login100-form-btn">
          <div className="login100-form-bgbtn">
          </div>
          <button className="login100-form-btn">
            Sign Up
          </button>
        </div>
      </div>

    </form>
  </div>
)

export default Blog
