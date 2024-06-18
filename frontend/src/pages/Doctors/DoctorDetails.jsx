import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import starIcon from "../../assets/images/star.png";
import DoctorAbout from "../../components/Doctors/DoctorAbout";
import Feedback from "../../components/Doctors/Feedback";
import Sidepanel from "../../components/Doctors/Sidepanel";
import { BASE_URL } from "../../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DoctorDetails = () => {
  const { id } = useParams();
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const [Tab, setTab] = useState("About");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={doctor?.photo} className="w-full" />
                </figure>
                <div>
                  <span
                    className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:px-6 text-[12px]
              leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded"
                  >
                    {doctor?.specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {doctor.name}
                  </h3>
                  <div className="flex item gap-[6px]">
                    <span
                      className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                lg:leading-7 font-semibold text-headingColor"
                    >
                      <img src={starIcon} />
                      {doctor.averageRating}
                    </span>
                    <span
                      className="text-[14px] leading-5 lg:text-[16px]
                lg:leading-7 font-semibold text-textColor"
                    >
                      ({doctor.totalRating})
                    </span>
                  </div>

                  <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                    {doctor.bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
                <button
                  className={`${
                    Tab == "About" &&
                    "border-b border-solid border-red-600"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                  onClick={() => setTab("About")}
                >
                  About
                </button>

                <button
                  onClick={() => setTab("Feedback")}
                  className={`${
                    Tab == "Feedback" &&
                    "border-b border-solid border-red-600"
                  } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px] ">
                {Tab == "About" && (
                  <DoctorAbout
                    name={doctor.name}
                    about={doctor.about}
                    qualifications={doctor.qualifications}
                    experiences={doctor.experiences}
                  />
                )}
                {Tab == "Feedback" && (
                  <Feedback
                    reviews={doctor.reviews}
                    totalRating={doctor.totalRating}
                  />
                )}
              </div>
            </div>
            <div>
              <Sidepanel
                doctorId={doctor._id}
                ticketPrice={doctor.ticketPrice}
                timeSlots={doctor.timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
