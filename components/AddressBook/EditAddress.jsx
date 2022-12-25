import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditAddress = () => {
  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row justify-content-center text-start mt-2 mt-lg-3  mb-0 mb-lg-2">
            <div className="col-12 col-md-5 col-lg-5">
              <div className="signup_title">
                <h1>Address</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-start">
            <div className="col-12 col-md-5 col-lg-5">
              <div className="signup_form">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form_label">Name</Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="name"
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form_label">Address</Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="text"
                      placeholder="Enter Your Address"
                    />
                  </Form.Group>
                  <Form.Select
                    className="mb-3 form_slect"
                    aria-label="Default select example"
                  >
                    <option>State</option>
                    <option value="1">Delhi</option>
                    <option value="2">Goa</option>
                    <option value="3">Gujarat</option>
                  </Form.Select>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form_label">Pincode</Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="text"
                      placeholder="Enter Pincode"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form_label">Landmark</Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="text"
                      placeholder="Enter Landmark"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form_label">
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="text"
                      placeholder="Enter Mobile Number"
                    />
                  </Form.Group>

                  <Button
                    className="signup_button w-100 mb-2 mb-lg-5"
                    type="submit"
                  >
                    Save
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAddress;
