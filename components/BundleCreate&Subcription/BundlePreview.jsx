import Link from "next/link";
import { useEffect, useState } from "react";
const BundlePreview = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  });

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

  return (
    <div className="">
      <div className="ornanic-section">
        <div className="bundle_sub_section">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-12">
                <div className="bundle_wrap">
                  <div className="bundle_heading">
                    <h1>Bundle Preview</h1>
                    <button className="add_more_btn"> + Add more Items</button>
                  </div>
                  <p>
                    Preview Seclected items, varients & proceed with
                    subscription
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  {products.slice(0, 4).map((product) => (
                    <div key={product.id} className="col-lg-12 mb-3">
                      <div className="cat">
                        <h2>Category 1</h2>
                      </div>
                      <div className="bundle_cart_details d-flex">
                        <div className="bundle_cart_img">
                          <img src="/images/61B9WXoALzL 1.png" alt="" />
                        </div>
                        <div className="bundle_cart_price_quantity">
                          <h3>Himaliay Soap</h3>
                          <h6>himalaya</h6>
                          <div className="bundle_cart_prices d-flex">
                            <div className="bundle_price_one ">
                              <h6>₹ 100</h6>
                            </div>
                            <div className="bundle_price_two ms-3">
                              <img src="/images/100.png" alt="" />
                            </div>
                            <div className="bundle_price_discount ms-3">
                              <h6>10% off</h6>
                            </div>
                          </div>
                          <div className="bundle_price_gm price_gm_one ">
                            <div className="bundle_price_div_one">
                              <span>50gm</span>
                              <span>100gm</span>
                              <span>150gm</span>
                            </div>
                            <div className="bundle_price_div_two">
                              <span>50gm</span>
                              <span>100gm</span>
                              <span>150gm</span>
                            </div>
                            <div className="bundle_price_gm price_gm_small mt-3">
                              <span>50gm</span>
                              <span>100gm</span>
                              <span>150gm</span>
                            </div>
                          </div>

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

              <div className="col-lg-3 mb-3">
                <div className="bundle_calculate">
                  <div className="bundle_sub_total_item">
                    <div className="coupon_title ">
                      <h3 className="font_w_b">Have a Coupon?</h3>
                    </div>
                    <div className="coupon_link">
                      <a href="">Apply to get discount</a>
                    </div>
                  </div>

                  <div className="bundle_sub_total_item">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="sub_total_title">
                          <h3>Sub Total</h3>
                          <div className="sub_price">₹12,000</div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="sub_total_title">
                          <h3>
                            Bundle <br /> Discount
                          </h3>
                          <div className="sub_price">- ₹ 12,00</div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="sub_total_title">
                          <h3>
                            Coupon <br /> Discount
                          </h3>
                          <div className="sub_price">- ₹ 500</div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="sub_total_title pt_50">
                          <h3>Total</h3>
                          <div className="sub_price">₹ 10,300</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="check_out_sub">Checkout or Subscribe</h2>
                  <div className="bundle_sub_total_item">
                    <div className="form-check">
                      <input
                        className="form-check-input monthly_checked_form"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        <div className="mb-3">
                          <textarea
                            className="form-control form_monthly"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="Monthly Subscription"
                          ></textarea>
                        </div>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input onetime_checked_form"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        <div className="mb-3">
                          <input
                            type="email"
                            className="form-control form_yearly"
                            id="exampleFormControlInput1"
                            placeholder="One Time Purchase"
                          />
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="upadate_sub_btn mt-3">
                    <div className="row">
                      <div className="col-lg-12">
                        <Link href="/wallet">
                          <a className="subscription_btn">
                            Proceed
                            <img src="./image/right_arroe.png" alt="" />{" "}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="bundle_sub_total_item new_year_coupon">
                  <div className="coupon_title ">
                    <h3 className="font_w_b">
                      NEWYEAR2022 <img src="./image/new_arrow.png" alt="" />
                    </h3>
                  </div>
                  <div className="coupon_link">
                    <a href="">Coupon has been applied</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bundle_bg_shape">
            <div className="bundle_bg_warp"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundlePreview;
