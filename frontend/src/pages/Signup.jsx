import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signupImg from "../assets/images/signup.gif";
import uploadImageToCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../../config.js";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader.js";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setformData({ ...formData, photo: data.url });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      const { message } = await res.json();
      if (!res.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-red-600 rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          <div className="rounded-l-lg lg:pl-16">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-red-600">account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  onChange={handleInputChange}
                  value={formData.name}
                  className="w-full  py-3 border-b border-solid
          border-[#c29999] focus:outline-none
          focus:border-b-red-600 text-[16px] leading-7
          text-headingColor placeholder:text-textColor 
           "
                />
              </div>
              <div className="mb-5">
                <input
                  type="email "
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  className="w-full  py-3 border-b border-solid
          border-[#c29999] focus:outline-none
          focus:border-b-red-600 text-[16px] leading-7
          text-headingColor placeholder:text-textColor 
           "
                />{" "}
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleInputChange}
                  value={formData.password}
                  className="w-full  py-3 border-b border-solid
          border-[#c29999] focus:outline-none
          focus:border-b-red-600 text-[16px] leading-7
          text-headingColor placeholder:text-textColor 
           "
                />
              </div>
              <div className="mb-5 flex items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    onChange={handleInputChange}
                    value={formData.role}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
              </div>
              <div className="mb-5 flex items-center justify-between">
                Gender:
                <label className="text-headingColor font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="gender"
                    onChange={handleInputChange}
                    value={formData.gender}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4  py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                  </select>
                </label>
              </div>
              <div className="m-5 flex items-center gap-3">
                {selectedFile && (
                  <figure
                    className="w-[60px] h-[60px] rounded-full border-2 border-solid border-red-600
            flex items-center justify-center"
                  >
                    <img
                      src={previewURL}
                      alt=""
                      className="w-full aspect-square object-cover rounded-full"
                    />
                  </figure>
                )}
                <div className="relative w-[160px] h-[50px] ">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png , .jpeg"
                    className="absolute top-0 left-0 w-full h-full opacity-0 "
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 w-full left-0 h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden
              bg-[#f9e5e5] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  disabled={loading && true}
                  className="w-full bg-red-600 text-white text-[18px] 
          leading-[30px] rounded-lg py-1"
                >
                  {loading ? <HashLoader size={35} color="#fff" /> : "Sign Up"}
                </button>
              </div>
              <p className="mt-5 text-textColor text-center">
                Already have an acount?{" "}
                <Link
                  to="/login"
                  className="text-red-600 font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
