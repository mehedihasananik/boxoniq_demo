import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Link from "next/link";
const Login = () => {
  return (
    <div>
      <div className="signup">
        <div className="container">
          <div className="row justify-content-center text-start mt-2 mt-lg-3 ">
            <div className="col-12 col-md-5 col-lg-5">
              <div className="signup_title">
                <h1>Sign In</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-start mt-o mb-2 mt-lg-2 mb-lg-3">
            <div className="col-12 col-md-5 col-lg-5">
              <div className="login_title">
                <h1>Welcome Back</h1>
                <h4>Hello there,sign in to continue</h4>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-start">
            <div className="col-12 col-md-5 col-lg-5">
              <div className="signup_form">
                <Form>
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
                    <div className="row ">
                      <div className="col-12 col-lg-12">
                        <div className="reset_button d-flex justify-content-end ">
                          <Link href="/resetPassword">
                            <Button className="reset_button">
                              Reset Password
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Form.Group>

                  <Button className="signup_button w-100 mb-2 " type="submit">
                    Sign In
                  </Button>
                  <Link href="/loginOtp">
                    <Button
                      className="signup_button_otp w-100 mb-2 "
                      type="submit"
                    >
                      Sign In with OTP
                    </Button>
                  </Link>
                  <Link href="register">
                    <Button
                      className="signup_button_link w-100 mb-2 "
                      type="submit"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
