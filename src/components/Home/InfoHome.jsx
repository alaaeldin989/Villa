import React from "react";

const InfoHome = () => {
  return (
    <div className="pb-5 info">
      <div className="container">
        <div className="row d-flex justify-content-around boxes">
          <div className="col-lg-4">
            <div className="info-box d-flex px-3">
              <div className="info-icon">
                <h4>34</h4>
              </div>
              <div className="info-content">
                <p> Buildings Finished Now</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="info-box d-flex px-3">
              <div className="info-icon">
                <h4>12</h4>
              </div>
              <div className="info-content">
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="info-box d-flex px-3">
              <div className="info-icon">
                <h4>24</h4>
              </div>
              <div className="info-content">
                <p>Awwards Won 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHome;
