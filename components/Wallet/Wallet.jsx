const Wallet = () => {
  return (
    <div>
      <div className="profile_section">
        <div className="container-fluid p_50">
          <div className="row">
            <div className="col-lg-12">
              <div className="global_header text-center history_header pt-lg-5">
                <h4 className="global_herder_title">Boxoniq Wallet</h4>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-5">
                  <div className="history_card_area_box wallet_card_box mb-5">
                    <h3 className="transactions_title">Wallet Balance</h3>
                    <div className="wallet_price mb-4">
                      <h4>₹ 400</h4>
                    </div>
                    <div className="wallet_price">
                      <input
                        type="text"
                        className=" form-control wallet_input w-100"
                        placeholder="Enter Amount"
                      />
                    </div>
                    <div className="walltet_buttons mt-5 mb-3">
                      <button className="btn btn_wallet w-100">
                        + Add To Wallet
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 ">
                  <div className="history_calculation_sidebar pb-5">
                    <h3 className="transactions_title">Transactions</h3>
                    <div className="history_product_box transactions_box mb-4">
                      <div className="d-flex align-items-center justify-content-between ">
                        <div className="transaction_des">
                          <h4>Rs. 772.35 is deducted for your</h4>
                          <h4>Order</h4>
                          <h4>0000-00-00 00:00:00</h4>
                        </div>
                        <div>
                          <h3 className="transactions_price">₹ 400</h3>
                        </div>
                      </div>
                    </div>
                    <div className="history_product_box transactions_box mb-4">
                      <div className="d-flex align-items-center justify-content-between ">
                        <div className="transaction_des">
                          <h4>Rs. 772.35 is deducted for your</h4>
                          <h4>Order</h4>
                          <h4>0000-00-00 00:00:00</h4>
                        </div>
                        <div>
                          <h3 className="transactions_price transaction_cost">
                            ₹ 50
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="history_product_box transactions_box mb-4">
                      <div className="d-flex align-items-center justify-content-between ">
                        <div className="transaction_des">
                          <h4>Rs. 772.35 is deducted for your</h4>
                          <h4>Order</h4>
                          <h4>0000-00-00 00:00:00</h4>
                        </div>
                        <div>
                          <h3 className="transactions_price">₹ 400</h3>
                        </div>
                      </div>
                    </div>
                    <div className="history_product_box transactions_box mb-4 ">
                      <div className="d-flex align-items-center justify-content-between ">
                        <div className="transaction_des">
                          <h4>Rs. 772.35 is deducted for your</h4>
                          <h4>Order</h4>
                          <h4>0000-00-00 00:00:00</h4>
                        </div>
                        <div>
                          <h3 className="transactions_price transaction_cost">
                            ₹ 50
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="history_product_box transactions_box mb-4 ">
                      <div className="d-flex align-items-center justify-content-between ">
                        <div className="transaction_des">
                          <h4>Rs. 772.35 is deducted for your</h4>
                          <h4>Order</h4>
                          <h4>0000-00-00 00:00:00</h4>
                        </div>
                        <div>
                          <h3 className="transactions_price transaction_cost">
                            ₹ 50
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="history_product_box transactions_box mb-lg-5 ">
                      <div className="d-flex align-items-center justify-content-between ">
                        <div className="transaction_des">
                          <h4>Rs. 772.35 is deducted for your</h4>
                          <h4>Order</h4>
                          <h4>0000-00-00 00:00:00</h4>
                        </div>
                        <div>
                          <h3 className="transactions_price transaction_cost">
                            ₹ 50
                          </h3>
                        </div>
                      </div>
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

export default Wallet;
