import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TYPES } from "../assets/Data";

const SinglePage = () => {
  const { id } = useParams();

  const [itemInfo, setItemInfo] = useState({
    ID: 1,
    type: "Luxury Villa",
    price: "$2.264.000",
    address: "18 New Street Miami, OR 97219",
    bedrooms: 8,
    bathrooms: 8,
    area: "545m2",
    floor: 3,
    parking: "6 spots",
    content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.",
    content2: "When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
  });

  useEffect(() => {
    const item = TYPES.find((item) => item.ID === parseInt(id)); // تحويل id إلى عدد صحيح
    if (item) {
      setItemInfo(item);
    }
  }, [id]);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="detail-img">
              <img className="img-fluid w-100" src={itemInfo.image} alt="" />
              <div className="d-flex justify-content-between pt-2">
                <h5 className="main-det">{itemInfo.type}</h5>
              </div>
                <p className="pt-3 addres-details">{itemInfo.address}</p>
                <div className="py-3">
                <div className="line"></div>
                <div className="py-3 d-flex flex-column gap-3 text-det">
                <p>{itemInfo.content1}</p>
                <p>{itemInfo.content2}</p>
                </div>

                <div className="accordion py-4" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <p
                    className="mb-0 "
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne">
                    Best useful links ?
                  </p>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample">
                  <div className="card-body">
                    Get <strong>the best villa</strong> website template in HTML
                    CSS and Bootstrap for your business. TemplateMo provides you
                    the{" "}
                    <a
                      href="https://www.google.com/search?q=best+free+css+templates"
                      target="_blank">
                      best free CSS templates
                    </a>{" "}
                    in the world. Please tell your friends about it.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <p
                    className="mb-0 "
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    How does this work ?
                  </p>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionExample">
                  <div className="card-body">
                    Dolor <strong>almesit amet</strong>, consectetur adipiscing
                    elit, sed doesn't eiusmod tempor incididunt ut labore
                    consectetur <code>adipiscing</code> elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <p
                    className="mb-0 "
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                    Why is Villa Agency the best ?
                  </p>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordionExample">
                  <div className="card-body">
                    Dolor <strong>almesit amet</strong>, consectetur adipiscing
                    elit, sed doesn't eiusmod tempor incididunt ut labore
                    consectetur <code>adipiscing</code> elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
            </div>
                </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-flex flex-column feature-right px-4">
              <div className="d-flex align-items-center item">
                <img
                  className="img-fluid"
                  src="../src/assets/images/info-icon-01.png"
                  alt=""
                />
                <div className="">
                  <h4>250 m2</h4>
                  <p>Total Flat Space</p>
                </div>
              </div>
              <div className="d-flex align-items-center item">
                <img
                  className="img-fluid"
                  src="../src/assets/images/info-icon-02.png"
                  alt=""
                />
                <div className="">
                  <h4>Contract</h4>
                  <p> Contract Ready</p>
                </div>
              </div>
              <div className="d-flex align-items-center item">
                <img
                  className="img-fluid"
                  src="../src/assets/images/info-icon-03.png"
                  alt=""
                />
                <div className="">
                  <h4>Payment</h4>
                  <p> Payment Process</p>
                </div>
              </div>
              <div className="d-flex align-items-center item">
                <img
                  className="img-fluid"
                  src="../src/assets/images/info-icon-04.png"
                  alt=""
                />
                <div className="">
                  <h4>Safety</h4>
                  <p>24/7 Under Control</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
