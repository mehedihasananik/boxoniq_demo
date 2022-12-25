import Link from "next/link";

const Stories = () => {
  return (
    <div>
      <section className="stories position-relative">
        <div className="stories-bg"></div>
        <div className="stories-container container-fluid">
          <Link href="/story">
            <a className="text-decoration-none">
              <div className="row">
                <div className="col-lg-12">
                  <div className="stories-content text-center">
                    <h1>Stories</h1>
                    <p className="text-center mx-auto">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </p>
                    <form>
                      <input
                        type="email"
                        className="form-control search-control mx-auto text-center mb-3"
                        id="exampleFormControlInput1"
                        placeholder="Search for answers, topics..."
                      />
                      <img
                        className="story-img"
                        src="https://i.ibb.co/ZLyZqB4/search-6-1.png"
                        alt=""
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-11 col-sm-10 mx-auto">
                  <div className="container-fluid stories-details ">
                    <div className="row">
                      <div className="col-lg-5 col-sm-4">
                        <div className="stories-img">
                          <img
                            className="img-fluid"
                            src="https://i.ibb.co/HdsXq1h/2-9.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-4">
                        <div className="stories-content-details mx-auto">
                          <h3>What is Lorem Ipsum?</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-lg-11 col-sm-10 mx-auto  ">
                  <div className="container-fluid stories-details">
                    <div className="row">
                      <div className="col-lg-5 col-sm-4">
                        <div className="stories-img">
                          <img
                            className="img-fluid"
                            src="https://i.ibb.co/HdsXq1h/2-9.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-4">
                        <div className="stories-content-details">
                          <h3>What is Lorem Ipsum?</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pb-lg-5 pb-sm-0">
                <div className="col-lg-11 col-sm-10 mx-auto pb-lg-5 pb-sm-0">
                  <div className="container-fluid stories-details">
                    <div className="row">
                      <div className="col-lg-5 col-sm-4">
                        <div className="stories-img">
                          <img
                            className="img-fluid"
                            src="https://i.ibb.co/HdsXq1h/2-9.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-5 col-sm-4">
                        <div className="stories-content-details">
                          <h3>What is Lorem Ipsum?</h3>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum is simply dummy
                            text of the printing and typesetting industry. Lorem
                            Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Stories;
