import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    <div>
      <div className="my_cart_section d-none d-md-block d-lg-block">
        <div className="container ">
          <div className="row py-4">
            <div className="col-lg-12">
              <div className="my_cart_main_title text-center">
                <h1>My Cart</h1>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "white", borderRadius: "30px" }}
            className="pb-5 my_table"
          >
            <Table>
              <thead>
                <tr>
                  <th className="table-head">CATEGORY</th>
                  <th className="table-head">ITEM</th>
                  <th className="table-head">QUANTITY</th>
                  <th className="table-head">PRICE</th>
                  <th className="table-head">Total</th>
                  <th className="table-head"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="row_one">
                  <td className="table_item" rowSpan={2}>
                    Baby Shop
                  </td>
                  <td className="table_item">Himalaya shop</td>
                  <td className="table_item table_button ps-3">
                    <button onClick={handleDecrement} className="table_minus">
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement} className="table_plus">
                      +
                    </button>
                  </td>
                  <td className="table_item ps-4">100</td>
                  <td className="table_item ps-4">200</td>
                  <td>
                    <button>
                      <img src="/images/bin 1.png" alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="table_item">Himalaya shop</td>
                  <td className="table_item table_button ps-3">
                    <button onClick={handleDecrement} className="table_minus">
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement} className="table_plus">
                      +
                    </button>
                  </td>
                  <td className="table_item ps-4">100</td>
                  <td className="table_item ps-4">200</td>
                  <td>
                    <button>
                      <img src="/images/bin 1.png" alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="table_item ">Baby Shampoo</td>
                  <td className="table_item">ITC shampoo</td>
                  <td className="table_item table_button ps-3">
                    <button onClick={handleDecrement} className="table_minus">
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement} className="table_plus">
                      +
                    </button>
                  </td>
                  <td className="table_item ps-4">100</td>
                  <td className="table_item ps-4">200</td>
                  <td>
                    <button>
                      <img src="/images/bin 1.png" alt="" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="table_item">Baby Shampoo</td>
                  <td className="table_item">ITC shampoo</td>
                  <td className="table_item table_button ps-3">
                    <button onClick={handleDecrement} className="table_minus">
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement} className="table_plus">
                      +
                    </button>
                  </td>
                  <td className="table_item ps-4">100</td>
                  <td className="table_item ps-4">200</td>
                  <td>
                    <button>
                      <img src="/images/bin 1.png" alt="" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="row">
              <div className="col-lg-12">
                <div className="cart_proceed_button text-center py-3">
                  <button onClick={handleShow} className="">
                    Proceed to Billing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <section className="billing">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="coupon-container">
                    <div className="coupon-title">
                      <h1>Coupons</h1>
                    </div>
                    <div className="coupon-details d-flex align-items-center">
                      <div className="dot">
                        <img
                          src="https://i.ibb.co/88YtbhN/Ellipse-31.png"
                          alt=""
                        />
                      </div>
                      <div className="coupon-title">
                        <h5>User100</h5>
                        <h6>Get Flat 500 using this code</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="coupon_itmes d-flex justify-content-between">
                    <div className="coupon_left_items">
                      <h6>Sub Total</h6>
                      <h6>Bundle Discount</h6>
                      <h6>Coupon Discount</h6>
                      <h6>Discount Charges</h6>
                      <h6>Total</h6>
                    </div>
                    <div className="coupon_right_items">
                      <h3>₹350</h3>
                      <h3>-₹350</h3>
                      <h3>-₹350</h3>
                      <h3>₹50</h3>
                      <h3>₹250</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="checkout-container">
                    <div className="checkout-title">
                      <h1>Checkout or Subscribe</h1>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input form_radio radio_subcription"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        <input
                          type="email"
                          className="form-control checkout montly_subcription my-3"
                          id="exampleFormControlInput1"
                          placeholder="Monthly Subscription"
                        />
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form_radio"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        <input
                          type="email"
                          className="form-control checkout my-3"
                          id="exampleFormControlInput1"
                          placeholder="One Time Purchase"
                        />
                      </label>
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
          </section>
        </Offcanvas.Body>
      </Offcanvas>
      {/* cart on mobile */}
      <div className="container-fluid d-block d-md-none d-lg-none">
        <div className="row mt-3 ">
          <div className="col-12 col-lg-6">
            <div className="baby_bath_title">
              <h2>Baby Bath</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="baby_bath_main_container">
              <div className="baby_bath_container d-flex">
                <div className="baby_bath_img">
                  <img src="/images/61B9WXoALzL 1.png" alt="" />
                </div>
                <div className="baby_bath_details">
                  <div className="baby_bath_subtitle">
                    <h5>Himalaya Soap</h5>
                  </div>
                  <div className="baby_bath_qty_price d-flex g-3">
                    <div className="baby_bath_quantity">
                      <h6>Qty: 1</h6>
                    </div>
                    <div className="baby_bath_price">
                      <h6>Price: ₹100</h6>
                    </div>
                    <div className="baby_bath_total">
                      <h6>Total: ₹100</h6>
                    </div>
                  </div>
                  <div className="remove_btn_gm">
                    <div className="baby_bath_btn">
                      <button className="baby_bath_remove_btn">
                        Remove Item
                      </button>
                      <button className="baby_bath_gm_btn ms-3 ">50gm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mt-3 mt-lg-0">
            <div className="baby_bath_main_container">
              <div className="baby_bath_container d-flex">
                <div className="baby_bath_img">
                  <img src="/images/61B9WXoALzL 1.png" alt="" />
                </div>
                <div className="baby_bath_details">
                  <div className="baby_bath_subtitle">
                    <h5>Himalaya Soap</h5>
                  </div>
                  <div className="baby_bath_qty_price d-flex g-3">
                    <div className="baby_bath_quantity">
                      <h6>Qty: 1</h6>
                    </div>
                    <div className="baby_bath_price">
                      <h6>Price: ₹100</h6>
                    </div>
                    <div className="baby_bath_total">
                      <h6>Total: ₹100</h6>
                    </div>
                  </div>
                  <div className="remove_btn_gm">
                    <div className="baby_bath_btn">
                      <button className="baby_bath_remove_btn">
                        Remove Item
                      </button>
                      <button className="baby_bath_gm_btn ms-3 ">50gm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4  mt-3 mt-lg-0">
            <div className="baby_bath_main_container">
              <div className="baby_bath_container d-flex">
                <div className="baby_bath_img">
                  <img src="/images/61B9WXoALzL 1.png" alt="" />
                </div>
                <div className="baby_bath_details">
                  <div className="baby_bath_subtitle">
                    <h5>Himalaya Soap</h5>
                  </div>
                  <div className="baby_bath_qty_price d-flex g-3">
                    <div className="baby_bath_quantity">
                      <h6>Qty: 1</h6>
                    </div>
                    <div className="baby_bath_price">
                      <h6>Price: ₹100</h6>
                    </div>
                    <div className="baby_bath_total">
                      <h6>Total: ₹100</h6>
                    </div>
                  </div>
                  <div className="remove_btn_gm">
                    <div className="baby_bath_btn">
                      <button className="baby_bath_remove_btn">
                        Remove Item
                      </button>
                      <button className="baby_bath_gm_btn ms-3 ">50gm</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3 text-center">
          <div className="col-12">
            <div className="cart_procedd_btn">
              <button>
                Procceed to Billing{" "}
                <img className="ms-3" src="/images/Vector 3.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
