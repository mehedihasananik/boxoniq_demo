import React, { useEffect, useState } from "react";
import Link from "next/link";

const CommunityQA = () => {
  const [questions, setQuestions] = useState([]);
  console.log(questions);
  useEffect(() => {
    fetch("questionData.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);
  return (
    <section className="section-container">
      {/* Community banner arra */}
      <div className="community-container">
        <h1 className="text-center pt-lg-5 pb-2 text-white">Community</h1>
        <form className="half d-flex  justify-content-center">
          <input
            type="text"
            style={{ backgroundColor: "#D9D9D9" }}
            className="form-control community p-3  ps-5 rounded"
            placeholder="Search for answers, topics..."
          />
          <img
            className="community-img"
            src="https://i.ibb.co/WG0n2t0/search-6-1-1.png"
            alt=""
          />
        </form>
        <div className="community-box d-flex flex-column flex-md-row justify-content-center align-items-center half-width  mx-auto bg-white rounded my-5 ask-form">
          <div className="w-25">
            <img
              className="p-3"
              src="https://i.ibb.co/xDKrjKV/conversation.png"
              alt=""
            />
          </div>
          <form className="w-75 ">
            <input
              type="text"
              className="input-bottom text"
              placeholder="Ask and discuss everything here..."
            />
            <button
              style={{ backgroundColor: "#09A42B" }}
              className="btn btn-success ask-button "
            >
              Post
            </button>
          </form>
        </div>
      </div>

      {/* Community Q&A area */}
      <section
        style={{ paddingTop: "100px" }}
        className="row container mx-auto mx-0"
      >
        {/* Popular Question area */}
        <div className="col-12 col-md-8 col-lg-9">
          <h3 className="popular-question">Popular Questions</h3>
          {questions.map((question) => (
            <div
              key={question.id}
              className="card p-2 p-lg-0 popular-container mb-3"
            >
              <div className="p-2 question-container">
                <img src="https://i.ibb.co/mXTfcXn/Ellipse-27.png" alt="" />
                <div className="question_area__avatar">
                  <div className="question-details">
                    <h3>{question.name}</h3>
                    <p title={question.question}>
                      {question.question.slice(0, 50) + "..."}
                    </p>
                    <p className="answers">
                      <span className="me-2">
                        <img
                          src="https://i.ibb.co/yy0ZQG2/comment-1-1.png"
                          alt=""
                        />
                      </span>
                      See Answers
                    </p>
                  </div>
                  <div className="image-collection">
                    {question?.avaterUser?.map((avater, i) => (
                      <img
                        key={i}
                        src={avater}
                        alt="Avatar"
                        className="avatar"
                      />
                    ))}

                    <div className="main-avatar">
                      <span className="avatar_two"></span>
                      <span className="avatar_two"></span>
                      <span className="avatar_two"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link href="/communityUpdate">
            <div className="mb-2 mb-lg-5">
              <button
                style={{ backgroundColor: "#09A42B" }}
                className="btn btn-success px-5 my-lg-3 all_question_btn my-5"
              >
                Show all questions
              </button>
            </div>
          </Link>
        </div>

        {/* See moor area */}
        <div className="col-12 col-md-4 col-lg-3">
          <div className="see-more-div">
            <h3>See More</h3>
            <button className="btn w-100 text-start rounded bg-white py-2 my-1 see_more">
              Subscription History
            </button>
            <button className="btn w-100 text-start rounded bg-white  py-2 my-1 see_more">
              Order History
            </button>
            <button className="btn w-100 text-start rounded bg-white  py-2 my-1 see_more">
              Address Book
            </button>
            <button className="btn w-100 text-start rounded bg-white  py-2 my-1 see_more">
              Policies
            </button>
            <button className="btn w-100 text-start rounded bg-white  py-2 my-1 see_more">
              FAQs
            </button>
            <button className="btn w-100 text-start rounded bg-white  py-2 my-1 see_more">
              My Cart
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default CommunityQA;
