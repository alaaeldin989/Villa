import React, { useState } from "react";
import { TYPES } from "../../assets/Data";
import { NavLink } from "react-router";

const ProductPro = () => {
  const [show, setShow] = useState("all");

  const renderShow = () => {
    switch (show) {
      case "all":
        return (
          <div className="row cards-main">
            {TYPES.map((type, index) => (
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

                  <NavLink
                    to={`/single/${type.ID}`}
                    className="prop-btn m-auto py-2 d-flex justify-content-center">
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
        );

      case "Apartment":
        return (
          <div className="row cards-main">
            {TYPES.map((type, index) =>
              type.type == "Apartment" || type.type == "Modern Condo" ? (
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

                    <NavLink
                      to={`/single/${type.ID}`}
                      className="prop-btn m-auto py-2 d-flex justify-content-center">
                      <button
                        className="btn btn-villa my-2 my-sm-0 position-relative"
                        type="submit">
                        Schedule a visit
                      </button>
                    </NavLink>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        );

      case "Villa House":
        return (
            <div className="row cards-main">
              {TYPES.map((type, index) =>
                type.type == "Luxury Villa" ? (
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
  
                      <NavLink
                        to={`/single/${type.ID}`}
                        className="prop-btn m-auto py-2 d-flex justify-content-center">
                        <button
                          className="btn btn-villa my-2 my-sm-0 position-relative"
                          type="submit">
                          Schedule a visit
                        </button>
                      </NavLink>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          );


      case "Penthouse":
        return (
          <div className="row cards-main">
            {TYPES.map((type, index) =>
              type.type == "Penthouse" ? (
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

                    <NavLink
                      to={`/single/${type.ID}`}
                      className="prop-btn m-auto py-2 d-flex justify-content-center">
                      <button
                        className="btn btn-villa my-2 my-sm-0 position-relative"
                        type="submit">
                        Schedule a visit
                      </button>
                    </NavLink>
                  </div>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        );
    }
  };

  return (
    <div className="py-5">
      <div className="container">
        <div className="row pro">
          <div className="col-md-12 buttons d-flex flex-wrap justify-content-center">
            <div className="">
              <button
                onClick={() => setShow("all")}
                className={`${show == "all" ? "active" : ""}`}>
                Show All
              </button>
            </div>
            <div className="">
              <button
                onClick={() => setShow("Apartment")}
                className={`${show == "Apartment" ? "active" : ""}`}>
                Apartment
              </button>
            </div>
            <div className="">
              <button
                onClick={() => setShow("Villa House")}
                className={`${show == "Villa House" ? "active" : ""}`}>
                Villa House
              </button>
            </div>
            <div className="">
              <button
                onClick={() => setShow("Penthouse")}
                className={`${show == "Penthouse" ? "active" : ""}`}>
                Penthouse
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">{renderShow()}</div>
    </div>
  );
};

export default ProductPro;
