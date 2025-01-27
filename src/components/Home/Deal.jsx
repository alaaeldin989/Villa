import React, { useState } from "react";
import { DEAL } from "../../assets/Data";

const Deal = () => {
  const [deal, setDeal] = useState("deal1");

  const renderDeal = () => {
    switch (deal) {
      case "deal1":
        return (
          <div className="row d-flex justify-content-lg-between">
            <div className="col-lg-3">
              <div className="right-deal d-flex flex-column px-3 py-3">
                <p>Total Flat Space <span>{DEAL[0].Total_Flat_Space}</span></p>
                <p>Floor number <span>{DEAL[0].Floor}</span></p>
                <p>Number of rooms <span>{DEAL[0].Num_of_rooms}</span></p>
                <p>Parking Available <span>{DEAL[0].Parking}</span></p>
                <p>Payment Process <span>{DEAL[0].Payment}</span></p>
              </div>
            </div>

            <div className="col-lg-5 d-flex justify-content-center">
              <img src={DEAL[0].image} className="img-fluid" alt="" />
            </div>

            <div className="col-lg-3">
              <div className="left-deal d-flex flex-column">
                <p className="about">{DEAL[0].about}</p>
                <p className="content">{DEAL[0].content1}</p>
                <p className="content">{DEAL[0].content2}</p>
                <button className="btn btn-villa my-2 my-sm-0 position-relative" type="submit">
                <span className="position-absolute">
                  <i class="fa fa-calendar"></i>
                </span>
                Schedule a visit
              </button>
              </div>
            </div>
          </div>
        );
      case "deal2":
        return(
          <div className="row d-flex justify-content-lg-between">
          <div className="col-lg-3">
            <div className="right-deal d-flex flex-column px-3 py-3">
              <p>Total Flat Space <span>{DEAL[1].Total_Flat_Space}</span></p>
              <p>Floor number <span>{DEAL[1].Floor}</span></p>
              <p>Number of rooms <span>{DEAL[1].Num_of_rooms}</span></p>
              <p>Parking Available <span>{DEAL[1].Parking}</span></p>
              <p>Payment Process <span>{DEAL[1].Payment}</span></p>
            </div>
          </div>

          <div className="col-lg-5 d-flex justify-content-center">
            <img src={DEAL[1].image} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-3">
            <div className="left-deal d-flex flex-column">
              <p className="about">{DEAL[1].about}</p>
              <p className="content">{DEAL[1].content1}</p>
              <p className="content">{DEAL[1].content2}</p>
              <button className="btn btn-villa my-2 my-sm-0 position-relative" type="submit">
              <span className="position-absolute">
                <i class="fa fa-calendar"></i>
              </span>
              Schedule a visit
            </button>
            </div>
          </div>
        </div>
        );
      case "deal3":
        return (
          <div className="row d-flex justify-content-lg-between">
          <div className="col-lg-3">
            <div className="right-deal d-flex flex-column px-3 py-3">
              <p>Total Flat Space <span>{DEAL[2].Total_Flat_Space}</span></p>
              <p>Floor number <span>{DEAL[2].Floor}</span></p>
              <p>Number of rooms <span>{DEAL[2].Num_of_rooms}</span></p>
              <p>Parking Available <span>{DEAL[2].Parking}</span></p>
              <p>Payment Process <span>{DEAL[2].Payment}</span></p>
            </div>
          </div>

          <div className="col-lg-5 d-flex justify-content-center">
            <img src={DEAL[2].image} className="img-fluid" alt="" />
          </div>

          <div className="col-lg-3">
            <div className="left-deal d-flex flex-column">
              <p className="about">{DEAL[2].about}</p>
              <p className="content">{DEAL[2].content1}</p>
              <p className="content">{DEAL[2].content2}</p>
              <button className="btn btn-villa my-2 my-sm-0 position-relative" type="submit">
              <span className="position-absolute">
                <i class="fa fa-calendar"></i>
              </span>
              Schedule a visit
            </button>
            </div>
          </div>
        </div>
        );
      default:
        return (
          <div className="row d-flex justify-content-lg-between">
            <div className="col-lg-3">
              <div className="right-deal d-flex flex-column px-3 py-3">
                <p>Total Flat Space <span>{DEAL[0].Total_Flat_Space}</span></p>
                <p>Floor number <span>{DEAL[0].Floor}</span></p>
                <p>Number of rooms <span>{DEAL[0].Num_of_rooms}</span></p>
                <p>Parking Available <span>{DEAL[0].Parking}</span></p>
                <p>Payment Process <span>{DEAL[0].Payment}</span></p>
              </div>
            </div>

            <div className="col-lg-5 d-flex justify-content-center">
              <img src={DEAL[0].image} className="img-fluid" alt="" />
            </div>

            <div className="col-lg-3">
              <div className="left-deal d-flex flex-column">
                <p className="about">{DEAL[0].about}</p>
                <p className="content">{DEAL[0].content1}</p>
                <p className="content">{DEAL[0].content2}</p>
                <button className="btn btn-villa my-2 my-sm-0 position-relative" type="submit">
                <span className="position-absolute">
                  <i class="fa fa-calendar"></i>
                </span>
                Schedule a visit
              </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="py-5 deal">
      <div className="">
        <div className="container">
          <div className="row d-flex justify-content-lg-between align-items-center">
            <div className="col-lg-4 title-deal">
              <p className="text-uppercase title-feature">| Best deal</p>
              <p className="feature-best">Find Your Best Deal Right Now!</p>
            </div>

            <div className="col-lg-6 buttons zer d-flex flex-wrap justify-content-around">
              <div className="">
                <button
                  onClick={() => setDeal("deal1")}
                  className={`${deal === "deal1" ? "active" : ""}`}
                  id="deal1">
                  Appartment
                </button>
              </div>
              <div className="">
                <button onClick={() => setDeal("deal2")}  className={`${deal === "deal2" ? "active" : ""}`} id="deal2">
                  Villa House
                </button>
              </div>
              <div className="">
                <button onClick={() => setDeal("deal3")}  className={`${deal === "deal3" ? "active" : ""}`} id="deal3">
                  Penthouse
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5 om">
          {renderDeal()}
        </div>
      </div>
    </div>
  );
};

export default Deal;
