import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

const BundleCreator = () => {
  const [quantity, setQuantity] = useState(0);
  const [posts, setPosts] = useState([]);
  const [bundle, setBundle] = useState([]);
  const [attributes, setAttribute] = useState([]);
  const [isError, setIsError] = useState("");
  const regex = /(<([^>]+)>)/gi;

  const [oneshow, setOne] = useState(false);
  const oneClose = () => setOne(false);
  const oneShow = () => setOne(true);

  const [twoshow, setTwo] = useState(false);
  const twoClose = () => setTwo(false);
  const twoShow = () => setTwo(true);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const apiEndPoint =
    "https://cms.cybertizeweb.com/boxoniq-crm/api/app/next/product-super-cat-web-bo.php";

  const getPosts = async () => {
    try {
      const res = await axios.post(apiEndPoint, {
        sequence: 1,
      });
      setPosts(res.data.product);
      setBundle(res.data);
      setAttribute(res.data.product[0].attribute);
    } catch (error) {
      setIsError(error.message);
    }
  };

  console.log(posts);

  // NOTE:  calling the function
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="bundle_sub_section bundle_create_section ">
          <div className="container-fluid plr_40 ">
            <div className="row">
              <div className="col-lg-12">
                {/* bundle wrap started */}
                <div className="check_out_heading">
                  <div className="bundle_wrap">
                    <div className="bundle_heading">
                      <h1>Create Your Bundle</h1>
                      <Button
                        className="add_more_btn filter_btn btn-primary my-3 my-lg-0 d-none d-md-block d-lg-block"
                        variant="primary"
                        onClick={oneShow}
                      >
                        <img
                          src="https://i.ibb.co/yqm1v4Q/filter-list.png"
                          alt=""
                        />
                        Filter
                      </Button>

                      <Button
                        className="add_more_btn filter_btn btn-success d-none d-md-block d-lg-block"
                        variant="primary"
                        onClick={twoShow}
                      >
                        <img
                          src="https://i.ibb.co/yqm1v4Q/filter-list.png"
                          alt=""
                        />
                        Shortings
                      </Button>
                    </div>
                    <p>
                      Select from the list of products from different categories
                    </p>
                  </div>
                </div>
                {/* bundle wrap ended */}
              </div>
            </div>
          </div>
          {/* categories started */}
          <div className="finter_area d-none d-md-block d-lg-block">
            <div className="container-fluid plr_40">
              <div className="row ">
                <div className="col-12 col-lg-12">
                  <div className="button_area">
                    <button>{bundle.name}</button>
                    <button>{bundle.name}</button>
                    <button>{bundle.name}</button>
                    <button>{bundle.name}</button>
                    <button>{bundle.name}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* categories ended */}
          <div className="container-fluid">
            {/* content descript starts */}
            <div className="row">
              <div className="col-3 col-lg-2">
                <div className="check_des_area">
                  <img src={bundle.img} alt="" />
                </div>
              </div>
              <div className="col-9 col-lg-10">
                <div className="chek_text">
                  <h4>{bundle.name}</h4>
                  <p>{bundle.desc}</p>
                </div>
              </div>
            </div>
            {/* content descript end */}
            {/* bundle cart starts */}
            <div className="bundle_cart mt-3">
              <div className="row">
                {posts.map((post) => (
                  <div key={post.id} className="col-lg-6  mb-4  mb-lg-4">
                    <div className="bundle_cart_details d-flex">
                      <div className="bundle_cart_img">
                        <img width={100} src={post.image} alt="" />
                      </div>
                      <div className="bundle_cart_price_quantity">
                        <h3>{post.title}</h3>
                        <p>{post.short_detail.replace(regex, "")}</p>
                        <div className="bundle_cart_prices d-flex">
                          <div className="bundle_price_one ">
                            <h6>{post.item_price}</h6>
                          </div>
                          <div className="bundle_price_two ms-3">
                            <div className="line"></div>
                            <h6>{post.item_mrp}</h6>
                          </div>
                          <div className="bundle_price_discount ms-3">
                            <h6>{post.item_discount}% off</h6>
                          </div>
                        </div>
                        {/* second map */}
                        {attributes.map((attribute) => (
                          <div
                            key={attribute.id}
                            className="bundle_price_gm price_gm_one "
                          >
                            <span>{attribute.name}</span>
                          </div>
                        ))}

                        <div className="bundle_cart_buttons mt-4">
                          <button
                            onClick={handleDecrement}
                            className="minus_btn "
                          >
                            -
                          </button>
                          <span>{quantity}</span>
                          <button
                            onClick={handleIncrement}
                            className="plus_btn"
                          >
                            +
                          </button>
                          <button className="add_box">Add to box</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* bundle cart ends */}
            {/* prev next procceed starts */}
            <div className="row mt-5">
              <div className="col-lg-12 mt-5 mt-md-0 mt-lg-0 ">
                <div className="pagination_area mt-3 mt-md-0 mt-lg-0 ">
                  <div className="pagination_button d-flex justify-content-between align-items-center ">
                    <button className="prev_btn m-0 m-lg-2">
                      <img src="/images/Vector.png" alt="" />
                      <span> Prev</span>
                    </button>

                    <button className="p_skip_btn m-0 m-lg-2">
                      <Link href="/finalCheckout">
                        <a className="text-decoration-none text-dark">
                          Procceed to checkout
                        </a>
                      </Link>
                    </button>
                    <button className="next_btn m-0 m-lg-2">
                      <span>Next</span>
                      <img src="/images/Vector2.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* prev next procceed ends */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundleCreator;
