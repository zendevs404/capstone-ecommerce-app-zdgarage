import React from "react";
import { Link } from "react-router-dom";

const subTitle = "Shop by Brand";
const title = "Bulid Your Dream Cars With Us";
const btnText = "Start Your Engine!";

const brandList = [
  {
    imgUrl: "src/assets/images/category/01.png",
    imgAlt: "Flex",
    iconName: "",
    title: "",
  },
  {
    imgUrl: "src/assets/images/category/02.png",
    imgAlt: "Brembo",
    iconName: "icofont-car",
    title: "",
  },
  {
    imgUrl: "src/assets/images/category/03.png",
    imgAlt: "Akana Carbon",
    iconName: "icofont-car",
    title: "",
  },
  {
    imgUrl: "src/assets/images/category/04.png",
    imgAlt: "Apexi",
    iconName: "icofont-car",
    title: "",
  },
  {
    imgUrl: "src/assets/images/category/05.png",
    imgAlt: "AEM",
    iconName: "icofont-car",
    title: "",
  },
  {
    imgUrl: "src/assets/images/category/06.png",
    imgAlt: "MRX Performance",
    iconName: "",
    title: "Clutch",
  },
];

const Brands = () => {
  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>

        {/* card */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {brandList.map((val, i) => (
              <div key={i} className="col">
                <Link to="/shop" className="category-item">
                  <div className="category-inner">
                    {/* img thumb */}
                    <div className="category-thumb">
                      <img src={val.imgUrl} alt="" />
                    </div>

                    {/* content */}
                    {/* <div className="category-content">
                      <div className="cate-icon">
                        <i className={val.iconName} />
                      </div>
                      <Link>
                        <h6>{val.title}</h6>
                      </Link>
                    </div> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* btn */}
          <div className="text-center mt-5">
            <Link to="/shop" className="lab-btn">
              <span>{btnText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
