import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { registerUser } from "../../services/userServices";
import { BASE_ROUTE } from "../../constants/appConstants";
import validateUser from "../utils/Validator";

import Video from "../../assets/images/Login/video3.mp4"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegisterUser = () => {

  const [userData, setUserData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    role: "student",
    email: "",
    contact: "",
    password: "",
    courseId: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState({
    firstNameErr: "",
    middleNameErr: "",
    lastNameErr: "",
    emailErr: "",
    contactErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
    formErr: "",
  });

  const navigate = useNavigate();
  const validate = validateUser();

  const handleChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  };

  const handleFirstName = e => {
    e.preventDefault();

    const firstNameErr = validate.validateName(userData.firstName)

    setError({
      ...error,
      firstNameErr
    })
  }

  const handleMiddleName = e => {
    e.preventDefault();

    const middleNameErr = validate.validateName(userData.firstName)

    setError({
      ...error,
      middleNameErr
    })
  }

  const handleLastName = e => {
    e.preventDefault();

    const lastNameErr = validate.validateName(userData.firstName)

    setError({
      ...error,
      lastNameErr
    })
  }

  const handleContact = (e) => {
    e.preventDefault();

    const contactErr = validate.validateMobileNumber(
      userData.contact
    );

    setError({
      ...error,
      contactErr,
    });
  };

  const handleEmailId = (e) => {
    e.preventDefault();

    const emailErr = validate.validateEmail(userData.email);

    setError({
      ...error,
      emailErr,
    });
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();

    const confirmPasswordErr = userData.password === confirmPassword;
    if (confirmPasswordErr) {
      setError({ ...error, confirmPasswordErr: null });
    } else {
      setError({ ...error, confirmPasswordErr: "Passwords do not match" });
      return;
    }
  };

  const handlePasswordBlur = (e) => {
    e.preventDefault();

    const passwordErr = validate.validatePassword(userData.password);

    setError({
      ...error,
      passwordErr,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const response = await registerUser(userData);
      const response = null
      if (response.status === 201) {
        navigate(BASE_ROUTE);
      }
    } catch (error) {
      setError({ ...error, formErr: "Please enter correct data" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">

      <video autoplay={"true"} loop muted src={Video}
        class="z-1 w-auto min-w-full  min-h-cover max-w-none">
      </video>
      <div className="absolute z-2 border-2 border-black border-none text-center p-8 space-y-6 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black md:text-3xl">
            Register
          </h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <div className="flex gap-6">
              <div>
                <div className="flex border-b-black border-b-2 my-2 py-1 text-white">
                  <input
                    type="text"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="fristName"
                    value={userData.firstName}
                    onBlur={handleFirstName}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.firstNameErr ? error.firstNameErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 my-2 py-1">
                  <input
                    type="text"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Middle Name"
                    onChange={handleChange}
                    name="middleName"
                    value={userData.middleName}
                    onBlur={handleMiddleName}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.middleNameErr ? error.middleNameErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 my-2 py-1">
                  <input
                    type="text"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="text"
                    value={userData.lastName}
                    onBlur={handleLastName}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.lastNameErr ? error.lastNameErr : <br />}
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <div className="flex border-b-black border-b-2 my-2 py-1">
                  <input
                    type="email"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Email Address"
                    onChange={handleChange}
                    name="email"
                    value={userData.email}
                    onBlur={handleEmailId}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-envelope text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-60">
                  {error.emailErr ? error.emailErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex border-b-black border-b-2 my-2 py-1">
                  <input
                    type="tel"
                    className="w-11/12 bg-transparent outline-none placeholder-black"
                    placeholder="Enter your Mobile Number"
                    onChange={handleChange}
                    name="contact"
                    value={userData.contact}
                    onBlur={handleContact}
                    required
                  />
                  <div className="w-2/12 flex items-center justify-center">
                    <i className="fa-solid fa-mobile text-x1"></i>
                  </div>
                </div>
                <p className="text-red-500 text-start text-sm w-96">
                  {error.contactErr ? error.contactErr : <br />}
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div>
                <div className="flex items-center border-b-2 my-2 border-black">
                  <input
                    // type={showPassword ? "text" : "password"}
                    type="text"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Enter password"
                    onChange={handleChange}
                    name="password"
                    value={userData.password}
                    onBlur={handlePasswordBlur}
                    required
                  />
                  {/* <i
                    className={`fa-solid text-xl cursor-pointer ${showPassword ? VisibilityOffIcon: VisibilityIcon
                      }`}
                    onClick={togglePasswordVisibility}
                  ></i> */}
                </div>
                <p className="text-red-500 text-start text-sm w-96">
                  {error.passwordErr ? error.passwordErr : <br />}
                </p>
              </div>
              <div>
                <div className="flex items-center border-b-2 my-2 border-black">
                  <input
                    // type={showConfirmPassword ? "text" : "password"}
                    type="password"
                    className="flex-grow bg-transparent outline-none placeholder-black"
                    placeholder="Re-Enter password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onBlur={handleConfirmPassword}
                    required
                  />
                  {/* <i
                    className={`fa-solid text-xl cursor-pointer ${showConfirmPassword ? VisibilityOffIcon : VisibilityIcon
                      }`}
                    onClick={toggleConfirmPasswordVisibility}
                  ></i> */}
                </div>
                <p className="text-red-500 text-start text-sm w-96">
                  {error.confirmPasswordErr ? error.confirmPasswordErr : <br />}
                </p>
              </div>
            </div>
            {error.formErr && <p className="text-red-500">{error.formErr}</p>}
            <div className="text-center">
              <button
                type="submit"
                className="bg-black w-20 h-10 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <p>Already have account <Link to={BASE_ROUTE} className="text-blue-700 underline">Login here</Link></p>
      </div>
    </div>
  );
};

export default RegisterUser;
