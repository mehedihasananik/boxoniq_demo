import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Brands = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState("");
  const apiEndPoint =
    "https://cms.cybertizeweb.com/boxoniq-crm/api/app/next/brand-web-bo.php";

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
    <div className="container">
      {isError !== "" && (
        <h2 style={{ color: "red", textAlign: "center" }}>{isError}</h2>
      )}
      {/* Brand section start here */}
      <section className="brand-container">
        <h1 className="brand-title">BRANDS</h1>
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={6}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              "@2.00": {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {posts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="container-img">
                  <img src={post.brand} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Brands;
