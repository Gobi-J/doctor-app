/* eslint-disable react/prop-types */
import convertTime from "../../utils/convertTime";
// import {BASE_URL, token} from '../../../config.js'
// import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";

const Sidepanel = () => {
  const navigate = useNavigate();
  const bookinghandler = async (req, res) => {
    console.log("booking handler called");
    navigate("/checkout-success");
    // try {
    //     const res=await fetch(`http://localhost:5000/api/v1/bookings/checkout-session/${doctorId}`,{
    //         method:"POST",
    //         headers:{
    //             "Authorization":`Bearer ${token}`
    //             }
    //     })
    //     const data=await res.json()
    //     if(!res.ok){
    //         throw new Error(data.message + "Please try again")
    //     }
    //     // if(data.session.url){
    //     //     window.location.href=data.session.url;
    //     // }
    // } catch (error) {
    //     toast.error(error)
    // }
  };
  return (
    <div
      className="shadow-panelShadow p-3 lg:p-5 
    rounded-md"
    >
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          2500 INR
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time slots:
        </p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6  text-textColor font-semibold">
              Monday
            </p>
            <p className="text-[15px] leading-6  text-textColor font-semibold">
              {convertTime("9:00")}-{convertTime("20:00")}
            </p>
          </li>

          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6  text-textColor font-semibold">
              Tuesday
            </p>
            <p className="text-[15px] leading-6  text-textColor font-semibold">
              4:00PM -9:30PM
            </p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6  text-textColor font-semibold">
              Wednesday
            </p>
            <p className="text-[15px] leading-6  text-textColor font-semibold">
              4:00PM -9:30PM
            </p>
          </li>
        </ul>
      </div>
      <button onClick={bookinghandler} className="btn px-2 w-full rounded-md">
        Book Appointment
      </button>
    </div>
  );
};

export default Sidepanel;
