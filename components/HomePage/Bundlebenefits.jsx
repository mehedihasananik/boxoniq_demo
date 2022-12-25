import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Bundlebenefits = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState("");
  const apiEndPoint =
    "https://cms.cybertizeweb.com/boxoniq-crm/api/app/next/get-home-bundle-benefit-bo.php";

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
      {/* Bundle banifite area start     */}
      <section className="bundle-container">
        <h1 className="title">BUNDLE BENEFITS</h1>
        <div className="row d-flex justify-content-between ">
          <div className="col-8 col-sm-5 col-md-5 col-lg-5 d-flex flex-column justify-content-center">
            {posts.map((post) => (
              <div key={post.id} className="shape">
                <div className="shape-title">
                  <p className="shape_title">{post.name}</p>
                  <p className="shape_title_sec ">{post.desc}</p>
                </div>

                <div className="banifit-box">
                  <img src={post.image} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="col-4 col-sm-7 col-md-7 col-lg-7">
            <div className="shape-left">
              <img
                className=""
                src="images/pexels-daniel-reche-1556706 1.png"
                alt=""
              />
            </div>
            <div className="banifit-right bundle-right mb-0 mb-lg-5 mb-xl-5">
              <h1>Bundle Benefits</h1>
              <p>
                Get additional bundle discount by adding minimum one product
                from each category
              </p>
              <button>
                Start Your Bundle
                <img
                  className="ms-2 start_bundle_img"
                  src="https://i.ibb.co/HrXYz5D/Arrow-2.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bundlebenefits;
