import React from "react";
import { ASSETS } from "../../assets/Data";

const Colser = () => {
  return (
    <div className="py-5 closer">
      <div className="vedio-view">
        <div className="title">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-4 text-center title-contact">
              <p className="text-uppercase title-feature">| Video View</p>
              <p className="feature-best">Get Closer View & Different Feeling</p>
            </div>
            </div>
          </div>
        </div>

        <div className="container py-4 closer-img">
          <div className="row d-flex justify-content-center flex-column align-items-center text-center">
            <div className="col-md-10 pt-4 position-relative">
              <img
                src={ASSETS.video_frame}
                className="rounded img-fluid h-100 w-100"
                alt=""
                srcset=""
              />
              <div className="play-icon position-absolute">
                <a href="">
                  <i class="fa fa-play d-flex justify-content-center align-items-center"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colser;
