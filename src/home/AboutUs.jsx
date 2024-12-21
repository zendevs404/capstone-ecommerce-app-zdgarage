import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const subTitle = "Mau menjadi bagian dari kita?";
const title = "Gabung #ZDGarage Team";
const desc = "Gabung team kami dan dapatkan diskon 25% di setiap pembelian parts!";
const btnText = "Gabung Sekarang";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "1000",
    text: "Produk Terjual",
  },
  {
    iconName: "icofont-graduate-alt",
    count: "100",
    text: "Tim Ahli",
  },
  {
    iconName: "icofont-medal",
    count: "5",
    text: "Penghargaan Nasional",
  },
];

const AboutUs = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col">
              {countList.map((val, i) => (
                <div key={i} className="count-item">
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h2>
                        <span className="count">
                          <CountUp end={val.count} />
                        </span>
                        <span>+</span>
                      </h2>
                      <p>{val.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}

            <div className="col">
              <div className="instructor-content">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <Link to="/sign-up" className="lab-btn">{btnText}</Link>
              </div>
          </div>

          <div className="col">
            <div className="instructor-thumb">
                <img src="/src/assets/images/instructor/01.png" alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
