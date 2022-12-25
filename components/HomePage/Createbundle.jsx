import Link from "next/link";

const Createbundle = () => {
  return (
    <div className="container">
      <div className="box-container">
        <div className="row mx-0 justify-content-between align-items-center">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 box-left">
            <img
              className="box-position"
              src="https://i.ibb.co/TRC52CX/Rectangle-94.png"
              alt=""
            />
            <h1 className="box-title pt-lg-5">
              <span>HOW</span> IT WORKS
            </h1>
          </div>
          <div className="main_box_contents col-12 col-sm-12 col-md-5 col-lg-5 d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-column justify-content-between align-items-center">
              <div className="box">
                <img src="https://i.ibb.co/rF690HB/Group-11.png" alt="" />
              </div>
              <h4 className="short-title">Create Box</h4>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="box">
                <img src="https://i.ibb.co/8BwhhRw/Group-10.png" alt="" />
              </div>
              <h4 className="short-title">Create Box</h4>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="box">
                <img src="https://i.ibb.co/TK4THkV/Group-12-2.png" alt="" />
              </div>
              <h4 className="short-title">Create Box</h4>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 col-xl-4 ">
            <Link href="/bundleCreator">
              <button
                className="mb-3 mb-md-0 mb-lg-0"
                style={{ backgroundColor: "#09A42B" }}
              >
                Start Your Bundle
                <img
                  className="ms-2 block-arrow"
                  src="https://i.ibb.co/GkmjLYb/Arrow-1.png"
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createbundle;
