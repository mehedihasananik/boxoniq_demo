import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Register = () => {
  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row justify-content-center text-start mt-2 mt-lg-3  mb-0 mb-lg-2">
            <div className="col-12 col-md-5 col-lg-5">
              <div className="signup_title">
                <h1>Register</h1>
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
                      placeholder="Enter Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form_label">
                      Mobile Number
                    </Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="name"
                      placeholder="Enter Mobile Number"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form_label">Baby Name</Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="name"
                      placeholder="Enter Baby Name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form_label">
                      Baby Date Of Birth
                    </Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="name"
                      placeholder="Enter Date Of Birth"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form_label">Email</Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="form_label">Password</Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="form_label">
                      Referral Code
                    </Form.Label>
                    <Form.Control
                      className="form_control_group w-100"
                      type="password"
                      placeholder="Enter Referral Code"
                    />
                  </Form.Group>

                  <Button
                    className="signup_button w-100 mb-2 mb-lg-5"
                    type="submit"
                  >
                    Sign Up
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

export default Register;
