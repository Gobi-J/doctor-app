import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import patientAvatar2 from "../../assets/images/hero-img01.jpg";
import patientAvatar4 from "../../assets/images/hero-img03.jpg";
import patientAvatar5 from "../../assets/images/hero-img04.jpg";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  const names = [
    {
      name: "Gayathri",
      image: patientAvatar2,
      text: "I have taken medical services from them. They treat so welt and they are providing the best medical services",
    },
    {
      name: "Gobi",
      image: patientAvatar,
      text: "I have taken medical services from them. They treat so welt and they are providing the best medical services",
    },
    {
      name: "Sam",
      image: patientAvatar5,
      text: "I have taken medical services from them. They treat so welt and they are providing the best medical services",
    },
    {
      name: "Vijay",
      image: patientAvatar4,
      text: "I have taken medical services from them. They treat so welt and they are providing the best medical services",
    },
    {
      name: "Priyanka",
      image: patientAvatar2,
      text: "I have taken medical services from them. They treat so welt and they are providing the best medical services",
    },
  ];
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ dynamicBullets: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {names.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img
                  src={item.image}
                  className="w-[50px] h-[50px] object-cover rounded-lg"
                />
                <div>
                  <h4
                    className="txt-[18px] leading-[30px] font-semibold
                             text-headingColor"
                  >
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-[2px]">
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                    <HiStar className="text-yellowColor w-[18px] h-5" />
                  </div>
                </div>
              </div>
              <p className="text-[16px] leading-7 mt-4  text-textColor font-[400]">
                {item.text}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
