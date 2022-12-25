import { Button } from "react-bootstrap";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
const AddressBook = () => {
  return (
    <div>
      <div className="profile_section d-none d-md-block d-lg-block">
        <div className="container-fluid p_50">
          <div className="row">
            <div className="col-lg-12">
              <div className="global_header text-center history_header py-lg-5">
                <h4 className="global_herder_title">Address Book</h4>
              </div>
            </div>

            <div className="colg-lg-12">
              <div className="row">
                <div className="col-lg-5">
                  <div className=" ">
                    <div className="add_new_add_btn_area mb-3 pt-5 pt-lg-0">
                      <Button className="common_btn_btn  w-100 d-flex justify-content-around">
                        <span>Saved Address</span> <span>2</span>{" "}
                      </Button>
                    </div>
                    <div className="add_new_add_btn_area pt-3 pb-5  pt-lg-0 pb-lg-0">
                      <button className="common_btn_btn cancel_btn active_btn w-100 d-flex justify-content-around">
                        <span>Add Address</span> <span></span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="history_calculation_sidebar history_calculation_optional">
                    <div className="address_book_area_box mb-5">
                      <div className="add_content d-flex justify-content-between align-items-start">
                        <div className="address_text">
                          <h4>Neha Singh</h4>
                          <h5>Bajra</h5>
                          <h5>Taj Mahal</h5>
                          <h5>834004</h5>
                          <h5>4530255869</h5>
                        </div>
                        <div className="address_icon ">
                          <div className="mb-3">
                            <img
                              className="cur_pointer"
                              src="https://i.ibb.co/M6QSJJq/dustbin-1-1.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <Link href="/editAddress">
                              <a>
                                <img
                                  className="cur_pointer"
                                  src="https://i.ibb.co/ZV3d6rf/pen-1.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="skip_address_btn_area">
                        <button className="skip_address_btn w-100">
                          Ship to this address
                        </button>
                      </div>
                    </div>
                    <div className="address_book_area_box mb-2 mb-lg-5">
                      <div className="add_content d-flex justify-content-between align-items-start">
                        <div className="address_text">
                          <h4>Neha Singh</h4>
                          <h5>Bajra</h5>
                          <h5>Taj Mahal</h5>
                          <h5>834004</h5>
                          <h5>4530255869</h5>
                        </div>
                        <div className="address_icon ">
                          <div className="mb-3">
                            <img
                              className="cur_pointer"
                              src="https://i.ibb.co/M6QSJJq/dustbin-1-1.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <Link href="editAddress">
                              <a>
                                <img
                                  className="cur_pointer"
                                  src="https://i.ibb.co/ZV3d6rf/pen-1.png"
                                  alt=""
                                />
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="skip_address_btn_area">
                        <button className="skip_address_btn w-100">
                          Ship to this address
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
      <div className="container-fluid d-block d-md-none d-lg-none py-4">
        <div className="addressbook_container pb-3 ">
          <div className="row">
            <div className="col-12">
              <div className="address_icon d-flex justify-content-end pt-3">
                <IoMdHome />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input address_form_radio"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  <div className="address_contact_list d-flex">
                    <div className="address_text ms-3">
                      <h5>Name</h5>
                      <h5 className="py-2">Address</h5>
                      <h5>LandMark</h5>
                      <h5>Pincode</h5>
                      <h5>State</h5>
                      <h5>Phone</h5>
                      <div>
                        <Link href="/editAddress">
                          <a className="edit_address_link">
                            <button className="edit_address_button">
                              <MdEdit className="ms-2 me-4 " /> <FaTrash />
                            </button>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="address_list ms-5">
                      <h5>Santos</h5>
                      <h5>988G+PG5 Pathalkudwa,ranchi</h5>
                      <h5>ranchi</h5>
                      <h5>8345</h5>
                      <h5>jharkhan</h5>
                      <h5>0149393939</h5>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="adressbook_btn text-center py-5">
              <Link href="/editAddress">
                <a>
                  <button>
                    <BsPlusLg /> Add Address
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressBook;
