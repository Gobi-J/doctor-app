/* eslint-disable react/prop-types */
import convertTime from "../../utils/convertTime";
import {BASE_URL, token} from '../../../config.js'
import { toast } from 'react-toastify'

const Sidepanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const bookingHandler = async (req, res) => {
    try {
        const res=await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,{
            method:"POST",
            headers:{
                Authorization:`Bearer ${token}`
                }
        })
        const data=await res.json()
        if(!res.ok){
            throw new Error(data.message + "Please try again")
        }
        if(data.session.url){
            window.location.href=data.session.url;
        }
    } catch (error) {
        toast.error(error)
    }
  };
  return (
    <div
      className="shadow-panelShadow p-3 lg:p-5 
    rounded-md"
    >
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} INR
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColor">
          Available Time slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li className="flex items-center justify-between mb-2" key={index}>
              <p className="text-[15px] leading-6  text-textColor font-semibold">
                {item.day}
              </p>
              <p className="text-[15px] leading-6  text-textColor font-semibold">
                {convertTime(`${item.startingTime}`)}-{convertTime(`${item.endingTime}`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
        Book Appointment
      </button>
    </div>
  );
};

export default Sidepanel;
