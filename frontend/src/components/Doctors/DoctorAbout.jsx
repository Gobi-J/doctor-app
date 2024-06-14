/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/formatDate";
const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Gobi
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam,
          possimus dolor. Quae repudiandae iure animi facere harum culpa modi
          natus quam, in distinctio eaque praesentium unde sint adipisci dicta
          excepturi.
        </p>
      </div>
      <div className="mt-12">
        <h3
          className="text-[20px] leading-[30px] text-headingColor 
            font-semibold flex items-center "
        >
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5  mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("04-08-2002")} - {formatDate("05-23-2003")}
              </span>
              <p className="text-[16px]  leading-6 font-medium text-textColor">
                PHD in surgeon{" "}
              </p>
            </div>
            <p className="text-[14px] leading-5  font-medium text-textColor">
              Kiot, Salem, TN
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5  mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("03-17-2004")} - {formatDate("12-11-2006")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in surgeon 2{" "}
              </p>
            </div>
            <p className="text-[14px] leading-5  font-medium text-textColor">
              Kabi University, Utopia
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6font-semibold">
              {formatDate('12-25-2010')} - Present
            </span>
            <p className="text-[16px]  leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[16px]  leading-5 font-medium text-textColor">
              Apollo, Chennai
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6font-semibold">
              {formatDate('09-22-2007')} - {formatDate('12-12-2010')}
            </span>
            <p className="text-[16px]  leading-6 font-medium text-textColor">
              Surgeon
            </p>
            <p className="text-[16px]  leading-5 font-medium text-textColor">
              Apollo, Chennai
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
