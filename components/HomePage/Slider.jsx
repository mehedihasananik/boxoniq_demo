import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";

const Slider = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState("");
  const apiEndPoint =
    "https://cms.cybertizeweb.com/boxoniq-crm/api/app/next/slider-bo.php";

  const getPosts = async () => {
    try {
      const res = await axios.get(apiEndPoint);
      setPosts(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  // NOTE:  calling the function
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      {/*carousel */}
      {isError !== "" && (
        <h2 style={{ color: "red", textAlign: "center" }}>{isError}</h2>
      )}
      <section className="swiper_carousel ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id} className="position-relative">
              <img
                style={{ width: "100%" }}
                className=""
                src={post.slide}
                alt=""
              />
              <div className="carusel-text ">
                <h1>Start</h1>
                <h2>your</h2>
                <h2>Bundle</h2>
                <h2 className="carusel-button me-2">Now</h2>
                <img
                  className=" d-sm-none d-inline"
                  src="https://i.ibb.co/KK7r5mF/Vector-2.png"
                  alt=""
                />
                <img
                  className="d-none d-sm-block"
                  src="https://i.ibb.co/HrXYz5D/Arrow-2.png"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Slider;
