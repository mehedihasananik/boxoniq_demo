import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Shop = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState("");
  const apiEndPoint =
    "https://cms.cybertizeweb.com/boxoniq-crm/api/app/next/super-cat-bo.php";

  const getPosts = async () => {
    try {
      const res = await axios.get(apiEndPoint);
      setPosts(res.data);
      console.log(res);
    } catch (error) {
      setIsError(error.message);
    }
  };
  // NOTE:  calling the function
  useEffect(() => {
    getPosts();
  }, []);

  // fetch(
  //   "https://cms.cybertizeweb.com/boxoniq-crm/api/app/next/product-super-cat-web-bo.php",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       sequence: 1,
  //     }),
  //   }
  // )
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => setPosts(data.product))
  //   .catch((error) => console.log("error"));

  return (
    <div className="container">
      {/* Shop section */}
      <section className="shop-container">
        <div className="shop-content">
          <h2 className="title">SHOP BY CATEGORY</h2>
          <p className="short-title">
            Skip modify your bundle as per requirement
          </p>
          <div className="shop-block-container">
            <div className="row d-flex justify-content-between">
              {posts.map((post) => (
                <div key={post.id} className="shape">
                  <h1>{post.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
