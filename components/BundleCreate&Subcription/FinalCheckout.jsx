import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";

const FinalCheckout = () => {
  return (
    <div>
      <div className="container d-none d-md-block d-lg-block">
        <div className="bundle_sub_section">
          <div className="container-fluid ">
            <div className="row">
              <div className="col-lg-12">
                <div className="bundle_wrap">
                  <div className="bundle_heading d-flex justify-content-between">
                    <div className="left">
                      <h1>Subscribe & Checkout</h1>
                      <p>
                        Select Months & Preview Wallet. <br />
                        You can cancel or pause you subscription anytime!
                      </p>
                    </div>

                    <div className="right">
                      <Link href="/bundlePreview">
                        <a className="procceed-button btn m-0 py-0 m-lg-3 py-lg-2">
                          Proceed to Bundle Preview
                          <img
                            className="m-2"
                            src="https://i.ibb.co/HTLfjs1/Vector-2.png"
                            alt="Picture of the author"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="bundle_wrap mb-3">
                  <div className="monthly_arae">
                    <button className="subscription_btn">
                      Monthly Subscribe Benefits Includes
                    </button>
                    <div className="month_content">
                      <div>
                        <ul>
                          <li>
                            <p>Get 5% off on every shipment</p>
                          </li>
                          <li>
                            <p>Free Shipping Always</p>
                          </li>
                          <li>
                            <p>Surprise Benefits with every 3rd Shipment</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="check_out_price_area">
                  <div className="bundle_sub_total_item">
                    <div className="sub_discount_title">
                      <h3>Total</h3>
                      <div className="discount_price">
                        <span> ₹ 9,785 </span>
                      </div>
                      <div className="offer_price">
                        <span>₹ 9,785</span>
                        <div className="offer_badge">
                          <span>5%off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="check_out_wallet">
                    <div className="add_price select_price">
                      Add <span>₹ 9,785 </span> x
                      <button className="">
                        <span className="two_months">2 Months / Times</span>
                        <Dropdown className="dropdown_months">
                          <Dropdown.Toggle
                            className="dropdown_months_basic"
                            id="dropdown-basic"
                          ></Dropdown.Toggle>

                          <Dropdown.Menu className="months_date">
                            <Dropdown.Item href="#/action-1">
                              02 Months / Times
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              03 Months / Times
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              04 Months / Times
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-4">
                              05 Months / Times
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-5">
                              06 Months / Times
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-6">
                              07 Months / Times
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-7">
                              08 Months / Times
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-8">
                              09 Months / Times
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-9">
                              10 Months / Times
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-10">
                              11 Months / Times
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-11">
                              12 Months / Times
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </button>
                    </div>
                    <div className="processed_checkout">
                      <h3>
                        Add <span>₹19,570 </span> to <br /> Wallet & Proceed{" "}
                        <img src="./image/check_arro.png" alt="" />{" "}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="check_out_w_des">
                  <p>
                    Bundle amount will be <br />
                    auto debited on 7th of every
                    <br />
                    month from your wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bundle_bg_shape">
            <div className="bundle_bg_warp"></div>
          </div>
        </div>
      </div>
      {/* preview on mobile */}
      <div className="container-fluid d-block d-md-none d-lg-none">
        <div className="row">
          <div className="col-lg-12">
            <div className="responsive_coupons">
              <h5>Coupons</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="billing_total_prices">
              <div className="billing_charges_details">
                <h4>Sub Total</h4>
                <h4>Bundle Discount</h4>
                <h4>Coupon Discount</h4>
                <h4>Delivery Charges</h4>
                <h4>Total</h4>
              </div>
              <div className="billing_charges_prices">
                <h4>₹ 1750</h4>
                <h4>-₹ 0</h4>
                <h4>-₹ 0</h4>
                <h4>-₹ 0</h4>
                <h4>₹ 1750</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="chekcout_subs">
              <h3>Checkout Or Subcribe</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="monthly_onetime_subcription">
              <div className="monthly_subcription_purchase">
                <div className="form-check form_monthly_sub">
                  <input
                    className="form-check-input monthly_subs_radio"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <h3 className="monthly_sub_titile">Monthly Subcription</h3>
                    <div className="monthsubcription_discount">
                      <span>
                        Get 5% Discount On Every Orders + Additional Benefits
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="onetime_subcription_purchase">
                <div className="col-lg-12">
                  <div className="form-check form_monthly_sub">
                    <input
                      className="form-check-input onetime_subs_radio"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      <h4 className="onetime_sub_title">One Time Purchase</h4>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center pb-5">
          <div className="col-lg-12">
            <div className="billing-button">
              <a href="" className="btn checkout-btn">
                Proceed
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCheckout;
