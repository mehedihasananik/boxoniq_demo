const Blog = () => {
  return (
    <section className="blog-area">
      <div className="blog-section position-relative">
        <div className="blog-background"></div>
        <div className="blog-content">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-title text-center">
                <h1>Stories</h1>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-8">
              <div className="blog-content text-center position-relative">
                <div className="image-blog">
                  <img
                    className="img-fluid"
                    src="https://i.ibb.co/f2JHkXH/1-10-1.png"
                    alt=""
                  />
                </div>
                <div className="content-blog">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when lookingat
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, asopposed to
                    using Content here, content here, making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for will uncover many web sites still in
                    their infancy. Various versionshave evolved over the years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
