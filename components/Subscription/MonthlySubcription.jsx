import Dropdown from "react-bootstrap/Dropdown";
import { BiChevronRight, BiWalletAlt } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "react-bootstrap/Button";

const MonthlySubcription = () => {
  return (
    <div>
      <section className="monthly_subcription_sec d-bloxk d-sm-none d-md-none d-lg-none">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="monthly_subtitle">Monthly Subcription</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="monthly_subcription_benefits">
                <div className="monthly_subcription_benefits_title">
                  <h4>Monthly Subcription Benefits Includes</h4>
                </div>
                <div className="monthly_subscription_box">
                  <p>
                    <BiChevronRight /> Get 5% subcription discount on every
                    shipment{" "}
                  </p>
                  <p>
                    <BiChevronRight /> Get 5% subcription discount on every
                    shipment{" "}
                  </p>
                  <p>
                    <BiChevronRight /> Get 5% subcription discount on every
                    shipment{" "}
                  </p>
                  <p>
                    <BiChevronRight /> Get 5% subcription discount on every
                    shipment{" "}
                  </p>
                  <p>
                    <BiChevronRight /> Get 5% subcription discount on every
                    shipment{" "}
                  </p>
                  <p>
                    <BiChevronRight /> Get 5% subcription discount on every
                    shipment{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="total_amount_list">
                <div className="total_title">
                  <h3>Total</h3>
                </div>
                <div className="total_price_list">
                  <h5>₹ 300</h5>
                </div>
                <div className="updated_price_list">
                  <h5>₹ 285</h5>
                </div>
                <div className="discount_price_list">
                  <h5>5% off</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="wallet_price_monthly">
                <div className="row">
                  <div className="col-7 col-lg-7">
                    <div className="add_money">
                      <h6> Add ₹ 285 x</h6>
                    </div>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                          Slect Months/Times
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
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
                    </div>
                    <div className="total_amount_wallet_price">
                      <h5>Total amount: ₹ 285</h5>
                    </div>
                  </div>
                  <div className="col-5 col-lg-5">
                    <div className="wallet_icon">
                      <span className="wallet_react_icon">
                        <BiWalletAlt />
                      </span>
                      <h2>In Wallet</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="wallet_proceed">
                <Button className="wallet_procced_btn">
                  Add ₹ 665 more to Wallet & Proceed <AiOutlineArrowRight />{" "}
                </Button>
              </div>
              <div className="available_wallet_balance">
                <span>(Available Wallet Balance : ₹-252)</span>
              </div>
              <div className="available_wallet_description">
                <p>
                  Bundle amount will be auto debited on shipment date of every
                  month from your wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonthlySubcription;
