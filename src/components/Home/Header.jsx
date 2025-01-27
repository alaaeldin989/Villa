import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Header = () => {
  return (
    <div className="">
      <div className="">
        <OwlCarousel
          className="owl-theme"
          loop
          autoplay
          autoplayTimeout={3000} // يمكنك ضبط القيمة كما تفضل
          items={1}
          margin={3}
          nav>
          <div class="item hurry">
            <div className="container px-5 h-100">
              <div className="row h-100">
                <div className="col-lg-3 text h-100 d-flex justify-content-center flex-column">
                  <p className="bg-white">
                    Toronto, <span>Canada</span>
                  </p>
                  <h3 className="text-uppercase">
                    Hurry! Get the Best Villa for you
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="item hurry2">
            <div className="container px-5 h-100">
              <div className="row h-100">
                <div className="col-lg-3 text h-100 d-flex justify-content-center flex-column">
                  <p className="bg-white">
                    Melbourne, <span>Australia</span>
                  </p>
                  <h3 className="text-uppercase">
                    Be Quick! Get the best villa in town
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="item hurry3">
            <div className="container px-5 h-100">
              <div className="row h-100">
                <div className="col-lg-3 text h-100 d-flex justify-content-center flex-column">
                  <p className="bg-white">
                    Miami, <span>South Florida</span>
                  </p>
                  <h3 className="text-uppercase">
                    Act Now! Get the highest level penthouse
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
        ;
      </div>
    </div>
  );
};

export default Header;
