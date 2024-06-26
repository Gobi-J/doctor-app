import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config.js";
import { toast } from "react-toastify";
import { authContext } from "../context/authContext.jsx";
import HashLoader from "react-spinners/HashLoader.js";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },
      });
      setLoading(false);
      toast.success(result.message);
      navigate("/home");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          <span className="text-red-600">Welcome</span> Back 💖
        </h3>
        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleInputChange}
              value={formData.email}
              className="w-full px-4 py-3 border-b border-solid
          border-[#9d4343de] focus:outline-none
          focus:border-b-red-600 text-[16px] leading-7
          text-headingColor placeholder:text-textColor"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleInputChange}
              value={formData.password}
              className="w-full px-4 py-3 border-b border-solid
          border-[#9d4343de] focus:outline-none
          focus:border-b-red-600 text-[16px] leading-7
          text-headingColor placeholder:text-textColor"
            />
          </div>
          <div className="mt-7 text-center">
            <button
              type="submit"
              className="bg-red-600 text-white text-[18px] 
          leading-[30px] font-semibold rounded-lg py-1 px-4"
            >
                {loading ? <HashLoader size={25} color="#fff" /> : "Login"}
            </button>
          </div>
          <p className="mt-5 text-textColor ">
            Don&apos;t have an acount?{" "}
            <Link className="text-red-600 font-medium ml-1" to="/signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
