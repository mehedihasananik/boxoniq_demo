const Contact = () => {
  return (
    <div className="container">
      {/*Contact section */}
      <section className="contact-section">
        <h1 className="contact-title">Let&apos;s Stay In Touch</h1>
        <p className="contact-short-title">
          Get access to latest updates from boxoniq and special offers
        </p>
        <div className="">
          <input
            className="input-text"
            type="text"
            name=""
            id=""
            placeholder="Enter your email address"
          />
          <input
            className="input-submit"
            type="submit"
            value="Submit"
            name=""
            id=""
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
