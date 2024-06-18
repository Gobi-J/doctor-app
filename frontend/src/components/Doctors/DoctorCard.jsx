/* eslint-disable react/prop-types */
import startIcon from "./../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const DoctorCard = ({ doctor }) => {
  const {
    name,
    specialization,
    avgRating,
    totalRating,
    photo,
    experiences,
  } = doctor;

  return (
    <div className="border rounded-xl p-5 lg:w-[350px]">
      <img src={photo} className="w-[305px] aspect-square object-cover rounded-lg" />
      <h2
        className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor
        font-[700] mt-3 lg:mt-5"
      >
        {name}
      </h2>
      <div className="mt-2 lg:mt-2 flex items-center justify-between">
        <span className="bg-[#f5c0c0] text-red-700 py-1 px-2 lg:py-2 lg:px-6 text-[12px] lg:text-[16px] font-semibold lg:leading-7 rounded">
          {specialization}
        </span>
        <div className="flex items-center gap-[6px]">
          <span
            className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px]
            font-semibold text-headingColor"
          >
            <img src={startIcon} alt="" />
            {avgRating}
          </span>
          <span
            className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px]
            font-[400] text-textColor"
          >
            ({totalRating})
          </span>
        </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <p className="text-[14px] leading-6 font-[400] text-textColor">
            At {experiences && experiences[0]?.hospital}
          </p>
        </div>

        <Link
          to={`/doctors/${doctor._id}`}
          className="w-[40px] h-[40px] rounded-full border border-solid  border-[#181A1E] flex items-center
           justify-center group hover:bg-red-600 hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
