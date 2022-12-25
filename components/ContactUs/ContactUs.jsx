const ContactUs = () => {
  return (
    <div>
      <div className="profile_section ">
        <div className="container-fluid p_50">
          <div className="row">
            <div className="col-lg-12">
              <div className="global_header text-center history_header contact_header_g pt-lg-5">
                <h4 className="global_herder_title">Contact Us</h4>
              </div>
              <div className="contact_area_header mb-4 mb-lg-5">
                <div className="contact_area_header_title text-center pb-lg-5">
                  <h4>We are here to help you</h4>
                  <h5>
                    For any services related queries you can <br />
                    contact us anytime at
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="row p_50">
                <div className="col-lg-5 mb-3">
                  <div className="message_icon mb-3 w-100 text-center">
                    <img
                      src="https://i.ibb.co/Z6bqGjr/lf20-wkcjaw8x-json.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="contact_arear_add mt-lg-5">
                    <div className="c_row d-flex  pb-3">
                      <div className="c_icon w-25">
                        <img
                          src="https://i.ibb.co/hYLXp9T/complete-1.png"
                          alt=""
                        />
                      </div>
                      <div className="c_text">
                        <h5>Whatsapp</h5>
                        <h6>9395265867</h6>
                      </div>
                    </div>
                    <div className="c_row d-flex  pb-3">
                      <div className="c_icon w-25 mt-2">
                        <img
                          src="https://i.ibb.co/7VY8xNt/telephone-1-1.png"
                          alt=""
                        />
                      </div>
                      <div className="c_text">
                        <h5>Work</h5>
                        <h6>9395265867</h6>
                      </div>
                    </div>
                    <div className="c_row d-flex  pb-3">
                      <div className="c_icon w-25 mt-2">
                        <img
                          src="https://i.ibb.co/M236rNM/mail-1.pnghttps://i.ibb.co/M236rNM/mail-1.png"
                          alt=""
                        />
                      </div>
                      <div className="c_text">
                        <h5>Email</h5>
                        <h6>hello@boxoniq.com</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="history_calculation_sidebar">
                    <div className="enquery_from">
                      <h4>Enquiry Form</h4>
                    </div>
                    <div className="add_new_address">
                      <h3 className="subscription_title_item">Name</h3>
                      <div className=" mb-3">
                        <div className="wallet_price">
                          <input
                            type="text"
                            className="form-control wallet_input w-100"
                            placeholder="Enter Your Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="add_new_address">
                      <h3 className="subscription_title_item">Email</h3>
                      <div className=" mb-3">
                        <div className="wallet_price">
                          <input
                            type="text"
                            className="form-control wallet_input w-100"
                            placeholder="Enter Your Email "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="add_new_address">
                      <h3 className="subscription_title_item">Phone number</h3>
                      <div className=" mb-3">
                        <div className="wallet_price">
                          <input
                            type="text"
                            className="form-control wallet_input w-100"
                            placeholder="Enter Your Phone number "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="add_new_address">
                      <h3 className="subscription_title_item">
                        Please write your comment
                      </h3>
                      <div className=" mb-3">
                        <div className="wallet_price">
                          <textarea
                            name=""
                            className=" form-control wallet_input w-100"
                            id=""
                            cols="30"
                            rows="5"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="skip_address_btn_area mt-lg-5">
                      <button className="skip_address_btn w-100">Submit</button>
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

export default ContactUs;
