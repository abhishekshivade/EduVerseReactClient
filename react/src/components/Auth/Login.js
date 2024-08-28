import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { userLogin } from "../../services/userServices";
import { STUDENT_DASHBOARD, TEACHER_DASHBOARD, BASE_ROUTE, ADMIN_DASHBOARD, REGISTER_STUDENT } from "../../constants/appConstants";
import { getJwtToken, storeJwtToken, storeUserType, storeUserId, getUserType } from "../../services/authServices";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';

// import Video1 from "../../assets/images/Login/video1.mp4"
// import Video2 from "../../assets/images/Login/video2.mp4"
import Video from "../../assets/images/Login/video3.mp4"
// import Video4 from "../../assets/images/Login/video4.mp4"

// import Slider from "../utils/Slider";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    userId: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  
// const slides=[
//     Video1,Video2,Video3,Video4
// ]

  useEffect(() => {
    if (getJwtToken()) {

      if (getUserType() === "STUDENT") navigate(STUDENT_DASHBOARD);
      if (getUserType() === "TEACHER") navigate(TEACHER_DASHBOARD);
      if (getUserType() === "ADMIN") navigate(ADMIN_DASHBOARD);
    } else navigate(BASE_ROUTE)
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //  const response = await userLogin(loginCredentials);
      const response = null;

      if (response.status === 200) {
        storeJwtToken(response.data.token);
        storeUserType(response.data.userType)
        storeUserId(response.data.userID)

        if (getUserType() === "STUDENT") navigate(STUDENT_DASHBOARD);
        if (getUserType() === "TEACHER") navigate(TEACHER_DASHBOARD);
        if (getUserType() === "ADMIN") navigate(ADMIN_DASHBOARD);
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="w-full h-[500px] flex items-center justify-center">

       <video autoplay={"true"} loop muted src={Video}
            class="z-1 w-auto pt-80
            min-w-full min-h-cover max-w-none">
        </video> 
      <div className="absolute z-2 border-2 border-black border-none text-center rounded-lg py-2 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-96 mt-60">
        <h2 className="text-black font-bold text-2xl md:text-3xl mt-3">Login</h2>
        <form className="my-2" onSubmit={handleSubmit}>
          <div className="relative flex border-b-black border-b-2 mx-5 my-7 py-1">
            <div className="mx-2">
              <PersonIcon />
            </div>
            <input
              type="text"
              name="userId"
              value={loginCredentials.userId}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none placeholder-black"
              placeholder="Enter User ID"
            />
          </div>
          <div className="relative flex border-b-black border-b-2 mx-5 my-7 py-1">
            <div className="mx-2">
              <KeyIcon />
            </div>
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              value={loginCredentials.password}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none placeholder-black"
              placeholder="Enter Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            className="bg-black w-20 h-[35px] text-white rounded-full mb-3 hover:bg-white hover:text-black hover:font-bold hover:border hover:border-black hover:border-2"
          >
            Login
          </button>
        </form>

        <p>Dont't have account <Link to={REGISTER_STUDENT} className="text-blue-700 underline">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;