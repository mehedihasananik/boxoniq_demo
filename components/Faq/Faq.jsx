import Accordion from "react-bootstrap/Accordion";
const Faq = () => {
  return (
    <div>
      <div className="faq_section">
        <div className="row">
          <div className=" col-lg-12">
            <div className="faq_title text-center">
              <h3>FAQ</h3>
            </div>
          </div>
        </div>
        <div className="faq_details my-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-6 col-md-6 col-lg-6 text-center">
              <div className="faq_container">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>How subscription works?</Accordion.Header>
                    <Accordion.Body>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here,
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Can I change the product in my suscription box?
                    </Accordion.Header>
                    <Accordion.Body>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here,
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>How subscription works?</Accordion.Header>
                    <Accordion.Body>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here,
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>How subscription works?</Accordion.Header>
                    <Accordion.Body>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here,
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>How subscription works?</Accordion.Header>
                    <Accordion.Body>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here,
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>How subscription works?</Accordion.Header>
                    <Accordion.Body>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here,
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>How subscription works?</Accordion.Header>
                    <Accordion.Body>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using Content here,
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
