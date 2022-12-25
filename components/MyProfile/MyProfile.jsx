const MyProfile = () => {
  return (
    <div>
      <section className="my_profile">
        <div className="my_profile_color">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <div className="my_profile_title text-center py-4 py-lg-5">
                  <h3>My Profile</h3>
                </div>
              </div>
            </div>
            <div className="row mt-4 mb-5 mb-lg-0 mt-lg-3 mb-lg-5 d-flex justify-content-center">
              <div className="col-lg-11 mt-5 mt-lg-0 mb-lg-5">
                <div className="my_profile_content mb-lg-5">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="my_profile_img">
                        <img
                          src="https://i.ibb.co/F66zjMf/Rectangle-205-1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 ">
                      <div className="profile_contents d-flex justify-content-between">
                        <div className="left_contents">
                          <h3>Name</h3>
                          <h3>Mob. no</h3>
                          <h3>Email</h3>
                          <h3>Baby Name</h3>
                          <h3>Baby Date of Birth</h3>
                        </div>
                        <div className="right_contents">
                          <h4>Shanvi</h4>
                          <h4>8735476325</h4>
                          <h4>Santosh.123@gmail.com</h4>
                          <h4>Babyyyy</h4>
                          <h4>21-05-22</h4>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="edit-button mt-4">
                            <button className="btn">Edit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
