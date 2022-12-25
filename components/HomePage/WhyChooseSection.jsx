import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const WhyChooseSection = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState("");
  const apiEndPoint =
    "https://cms.cybertizeweb.com/boxoniq-crm/api/app/next/get-home-why-choose-section-bo.php";

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
      {/* Why chose us */}
      <section className="why-chose-container">
        <h1 className="chose-title">WHY CHOOSE BOXONIQ?</h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@2.00": {
              slidesPerView: 4,
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
              <div className="choose_container_img">
                <img src={post.image} alt="" />
                <p className="chose-para">{post.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default WhyChooseSection;
