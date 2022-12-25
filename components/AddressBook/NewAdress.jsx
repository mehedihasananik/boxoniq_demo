const NewAdress = () => {
  return (
    <div>
      <div className="profile_section">
        <div className="container-fluid p_50">
          <div className="row">
            <div className="col-lg-12">
              <div className="global_header text-center history_header py-lg-5">
                <h4 className="global_herder_title">Add New Address</h4>
              </div>
            </div>

            <div className="colg-lg-12">
              <div className="row">
                <div className="col-lg-5 mb-3">
                  <div className=" ">
                    <div className="add_new_add_btn_area mt-5 mt-lg-0 mb-3">
                      <button className="common_btn_btn cancel_btn w-100 d-flex justify-content-around">
                        <span>Saved Address</span>
                        <span>2</span>
                      </button>
                    </div>
                    <div className="add_new_add_btn_area">
                      <button className="common_btn_btn active_btn w-100 d-flex justify-content-around">
                        <span>Add Address</span> <span></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="history_calculation_sidebar">
                    <div className="add_new_address">
                      <h3 className="subscription_title_item">Address</h3>
                      <div className=" mb-3">
                        <div className="wallet_price">
                          <textarea
                            name=""
                            className=" form-control wallet_input w-100"
                            id=""
                            cols="30"
                            rows="5"
                          >
                            Enter Your Address
                          </textarea>
                        </div>
                      </div>
                    </div>

                    <div className="add_new_address">
                      <h3 className="subscription_title_item mt-4">State</h3>
                      <div className=" mb-3">
                        <div className="wallet_price_address">
                          <select
                            name=""
                            id=""
                            className=" form-control wallet_input_select w-100 text-center"
                          >
                            <option value="">Select state</option>
                            <option value="">State 1</option>
                            <option value="">State 2</option>
                            <option value="">State 3</option>
                            <option value="">State 4</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="add_new_address">
                      <h3 className="subscription_title_item mt-5">Pincode</h3>
                      <div className=" mb-3">
                        <div className="wallet_price">
                          <input
                            type="text"
                            className=" form-control wallet_input w-100"
                            placeholder="Enter Your Pincode "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="add_new_address">
                      <h3 className="subscription_title_item mt-4">Landmark</h3>
                      <div className=" mb-3">
                        <div className="wallet_price">
                          <input
                            type="text"
                            className=" form-control wallet_input w-100"
                            placeholder="Enter Your Landmark "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="add_new_address">
                      <h3 className="subscription_title_item mt-4">
                        Phone number
                      </h3>
                      <div className=" mb-3">
                        <div className="wallet_price">
                          <input
                            type="text"
                            className=" form-control wallet_input w-100"
                            placeholder="Enter Your Phone number "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="skip_address_btn_area pt-4 pt-lg-4 pb-lg-5 ">
                      <button className="skip_address_btn w-100">Save</button>
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

export default NewAdress;
