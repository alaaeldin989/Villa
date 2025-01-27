import React from "react";
import { TYPES } from "../../assets/Data";
import { NavLink } from "react-router";

const PropertieHome = () => {
  return (
    <div className="pt-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4 text-center title-deal">
            <p className="text-uppercase title-feature">| Properties</p>
            <p className="feature-best">
              We Provide The Best Property You Like
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row cards-main">
          {TYPES.slice(0,6).map((type, index) => (
            <div className="col-md-6 col-lg-4">
              <div
                className="px-4 py-3 card-proparty d-flex flex-column"
                key={index}>
                <img src={type.image} alt="item" />
                <div className="d-flex justify-content-between pt-2 main-porp">
                  <h5>{type.type}</h5>
                  <p>{type.price}</p>
                </div>
                <h3 className="py-1">{type.address}</h3>
                <div className="d-grid py-2">
                  <p>
                    Bedrooms: <span>{type.bedrooms}</span>
                  </p>
                  <p>
                    Bathrooms: <span>{type.bathrooms}</span>
                  </p>
                  <p>
                    Area: <span>{type.area}</span>
                  </p>
                  <p>
                    Floor: <span>{type.floor}</span>
                  </p>
                  <p>
                    Parking: <span>{type.parking}</span>
                  </p>
                </div>

                <NavLink to={`/single/${type.ID}`} className="prop-btn m-auto py-2 d-flex justify-content-center">
                  <button
                    className="btn btn-villa my-2 my-sm-0 position-relative"
                    type="submit">
                    Schedule a visit
                  </button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertieHome;
