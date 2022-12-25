import Link from "next/link";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CommunityUpdate = () => {
  const [answer, setAnswer] = useState([]);
  console.log(answer);
  useEffect(() => {
    fetch("answerData.json")
      .then((res) => res.json())
      .then((data) => setAnswer(data));
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="section-container-update">
      {/* Community banner arra */}
      <div className="community-container-update container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="update-title">
              <h1 className="text-center text-white">
                Can we update this app?
              </h1>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="button-div d-flex justify-content-center">
                  <button className="btn mt-3" onClick={handleShow}>
                    Reply
                  </button>
                </div>
              </div>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="answer_title">Answer</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className="answer_form">
                  <Form.Group
                    className="mb-3 "
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      className="answer_modal_input"
                      type="email"
                      placeholder="Write your answer here..."
                    />
                  </Form.Group>
                </Form>
                <Button className="next_button">Next</Button>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>

      {/* Community Q&A area */}
      <div className="update-answers">
        <div className="container_gap">
          <div className="row update-container ">
            {/* Popular Answer area */}
            <div className="col-12 col-md-12 col-lg-9 col-xl-9">
              <div className="update-answer">
                <h3>Answers</h3>
              </div>
              {answer.map((answer) => (
                <div key={answer.id} className="card my-4">
                  <div className="question-container">
                    <img src="https://i.ibb.co/mXTfcXn/Ellipse-27.png" alt="" />
                    <div className="update-details">
                      <h3>{answer.name}</h3>
                      <p>{answer.date}</p>
                      <p className="update_para" title={answer.answer}>
                        {answer.answer.slice(0, 50)}
                      </p>
                    </div>
                    <div className="timer">
                      <p>2:23:56</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See moor area */}
            <div className="col-12 col-md-12 col-lg-3">
              <div className="relate_question">
                <h3>Related Questions</h3>
                <button className="btn w-100 text-start rounded bg-white py-2 my-3">
                  Can we update this app please, if yes then how?...
                </button>
                <button className="btn w-100 text-start rounded bg-white  py-2 my-3">
                  Can we update this app please, if yes then how?...
                </button>
                <button className="btn w-100 text-start rounded bg-white  py-2 my-3">
                  Can we update this app please, if yes then how?...
                </button>
                <button className="btn w-100 text-start rounded bg-white  py-2 my-3">
                  Can we update this app please, if yes then how?...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityUpdate;
