import Link from "next/link";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Subscription = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="profile_section">
        <div className="container-fluid p_50">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="global_header text-center subscription_header history_header d-flex justify-content-between align-items-center">
                    <div></div>
                    <h4 className="global_herder_title subscription_header_title_order mt-lg-4">
                      Subscription
                    </h4>
                    <div>
                      <button className="order_add_items mt-lg-4">
                        + Add items
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-5 mb-5">
                  <div className="subscription_area_header ">
                    <div className="subscription_titile text-center">
                      <h4>My Bundle Subscription</h4>
                      <h4>Product delivered for 2 Months</h4>
                    </div>
                    <div className="subscription_header_box_area mt-5 ">
                      <div className="subscription_description text-center">
                        <p>
                          Your bundle is updated for next month. Please maintain
                          sufficiant balance in your wallent for your upcoming
                          shipment.
                        </p>
                      </div>
                      <div className="manage_wallet_area d-flex align-items-center justify-content-between">
                        <button className="manage_wallet_btn">
                          Manage Wallet
                        </button>
                        <h6 className="available_balance">
                          Available Balance : <span>₹ 399</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="history_calculation_sidebar mb-lg-5">
                    <h3 className="subscription_title_item">
                      Wipes & Diaper Rash Cream
                    </h3>
                    <div className="history_product_box subscription_p_box d-flex align-items-start mb-4">
                      <div className="product_thum">
                        <img
                          src="https://i.ibb.co/1G2HDpF/61-B9-WXo-ALz-L-1.png"
                          alt=""
                        />
                      </div>
                      <div className="history_product_content ">
                        <h5>Himalaya soap</h5>
                        <div className="history_product_quantity d-flex align-items-center g-5">
                          <div>
                            <span className="product_qty">Quantity: 1</span>
                          </div>
                        </div>
                        <div className="history_product_quantity d-flex align-items-center g-5">
                          <div>
                            <span className="product_qty">Total: ₹ 100</span>
                          </div>
                          <div>
                            <span className="product_price">Attr: ₹ 100</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className="ml_price">100ml</span>
                            <span className="ml_price ms-3">150ml</span>
                            <span className="ml_price ms-3">200ml</span>
                          </div>
                          <div className="subscription_p_remove">
                            <button className="order_remove_item">
                              Remove Item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="subscription_title_item">
                      Wipes & Diaper Rash Cream
                    </h3>

                    <div className="history_product_box subscription_p_box d-flex align-items-start mb-4">
                      <div className="product_thum">
                        <img
                          src="https://i.ibb.co/1G2HDpF/61-B9-WXo-ALz-L-1.png"
                          alt=""
                        />
                      </div>
                      <div className="history_product_content ">
                        <h5>Himalaya soap</h5>
                        <div className="history_product_quantity d-flex align-items-center g-5">
                          <div>
                            <span className="product_qty">Quantity: 1</span>
                          </div>
                        </div>
                        <div className="history_product_quantity d-flex align-items-center g-5">
                          <div>
                            <span className="product_qty">Total: ₹ 100</span>
                          </div>
                          <div>
                            <span className="product_price">Attr: ₹ 100</span>
                          </div>
                        </div>
                        <div>
                          <div>
                            <span className="ml_price">100ml</span>
                            <span className="ml_price ms-3">150ml</span>
                            <span className="ml_price ms-3">200ml</span>
                          </div>
                          <div className="subscription_p_remove">
                            <button className="order_remove_item">
                              Remove Item
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="history_product_box subscription_p_box sub_total_box  mb-4">
                      <div className="history_row_item d-flex align-items-center">
                        <div className="history_title_card_left w-50">
                          <h4>Sub Total :</h4>
                        </div>
                        <div className="history_title_card_right w-50">
                          <h4>₹ 400 </h4>
                        </div>
                      </div>
                      <div className="history_row_item d-flex align-items-center">
                        <div className="history_title_card_left w-50">
                          <h4>Bundle Discount :</h4>
                        </div>
                        <div className="history_title_card_right w-50">
                          <h4>₹ 0 </h4>
                        </div>
                      </div>
                      <div className="history_row_item d-flex align-items-center">
                        <div className="history_title_card_left w-50">
                          <h4>Total :</h4>
                        </div>
                        <div className="history_title_card_right w-50">
                          <h4>₹ 380 </h4>
                        </div>
                      </div>
                    </div>

                    <div className="history_product_box subscription_p_box  mb-4">
                      <div className="total_price">
                        <h4>Total</h4>
                        <div className="price_del">
                          <span>
                            <del>₹ 300</del>
                          </span>
                        </div>
                        <div>
                          <span className="price_order">₹ 300</span>
                          <span className="discount">10% off </span>
                        </div>
                      </div>
                    </div>

                    <div className="history_product_box">
                      <h5 className="delivery_titile">Delivery Address</h5>
                      <div className="order_delivery_address ">
                        <div className="history_row_item d-flex align-items-center w-100">
                          <div className="history_title_card_left w-25">
                            <h4>Neha:</h4>
                          </div>
                          <div className="history_title_card_right w-75">
                            <h4>Neha </h4>
                          </div>
                        </div>
                        <div className="history_row_item d-flex align-items-center w-100">
                          <div className="history_title_card_left w-25">
                            <h4>Address:</h4>
                          </div>
                          <div className="history_title_card_right w-75">
                            <h4>Bajra </h4>
                          </div>
                        </div>
                        <div className="history_row_item d-flex align-items-center w-100">
                          <div className="history_title_card_left w-25">
                            <h4>Landmark:</h4>
                          </div>
                          <div className="history_title_card_right w-75">
                            <h4>Taj Mahal </h4>
                          </div>
                        </div>
                        <div className="history_row_item d-flex align-items-center w-100">
                          <div className="history_title_card_left w-25">
                            <h4>State:</h4>
                          </div>
                          <div className="history_title_card_right w-75">
                            <h4>West Bengal </h4>
                          </div>
                        </div>
                        <div className="history_row_item d-flex align-items-center w-100">
                          <div className="history_title_card_left w-25">
                            <h4>Pincode:</h4>
                          </div>
                          <div className="history_title_card_right w-75">
                            <h4>834003</h4>
                          </div>
                        </div>
                        <div className="history_row_item d-flex align-items-center w-100">
                          <div className="history_title_card_left w-25">
                            <h4>Phone:</h4>
                          </div>
                          <div className="history_title_card_right w-75">
                            <h4>9756826565</h4>
                          </div>
                        </div>
                      </div>

                      <a className="btn shadow-none addrebook_route">
                        <Link href="/addressBook">Edit</Link>
                      </a>
                    </div>
                    <div className="cancel_area mt-4  mb-2 mt-lg-5 mb-lg-4">
                      <button className="order_cancel_btn skip_cancel_btn">
                        Skip for this month
                      </button>
                    </div>
                    <div className="cancel_area pt-2 mb-2 mb-lg-5">
                      <button className="order_cancel_btn">
                        Cancel Subscription
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
