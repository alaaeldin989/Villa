import React from "react";
import { NavLink } from "react-router";

const ContactHome = () => {
  return (
    <div className="py-5 asl">
      <div className="py-5 contact-home">
        <div className="head">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-4 text-center title-contact">
                <p className="text-uppercase title-feature">| Contact Us</p>
                <p className="feature-best">Get In Touch With Our Agents</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container content">
          <div className="row d-flex justify-content-between pt-5">
            <div className="col-lg-7">
              <div className="">
                <iframe
                  className="w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d45366.60314253799!2d-80.118781!3d25.952478!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1737920471864!5m2!1sen!2sth"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                <div className="d-flex justify-content-between pt-5 card-contact">
                    <NavLink to={"tel:010-020-0340"} className="d-flex email px-4 py-4 align-items-center"> 
                        <img className="img-fluid" src="../src/assets/images/phone-icon.png" alt="" />
                        <div className="">
                            <h3>010-020-0340</h3>
                            <p>Phone Number</p>
                        </div>
                    </NavLink>
                    <NavLink to={"mailto: info@villa.co"} className="d-flex email px-4 py-4 align-items-center">
                        <img className="img-fluid" src="../src/assets/images/email-icon.png" alt="" />
                        <div className="">
                            <h3>info@villa.co</h3>
                            <p>Business Email</p>
                        </div>
                    </NavLink>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="">
                <form className="px-4 py-3">
                  <div className="">
                    <label>Full Name</label>
                    <input
                      name="Full name"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <label>Email Address</label>
                    <input name="Email" className="form-control" type="text" />
                  </div>
                  <div className="">
                    <label>Subject</label>
                    <input
                      name="Subject"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="">
                    <label>Massage</label>
                    <textarea
                      name="Review"
                      rows={5}
                      className="form-control"
                      id=""></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      className="btn btn-villa my-2 my-sm-0 position-relative"
                      type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
