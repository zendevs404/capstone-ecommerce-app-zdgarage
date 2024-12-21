import React, { useState } from 'react'
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const title = "Products Overviews";

const ProductData = [
  {
    imgUrl: "src/assets/images/categoryTab/01.jpg",
    cate: "Engines",
    title: "V8 Engine Block",
    author: "assets/images/course/author/01.jpg",
    brand: "Ford Performance",
    price: "$1999.00",
    id: 1,
  },
  {
    imgUrl: "src/assets/images/categoryTab/02.jpg",
    cate: "Suspension",
    title: "Coilover Kit",
    author: "assets/images/course/author/02.jpg",
    brand: "Bilstein",
    price: "$799.00",
    id: 2,
  },
  {
    imgUrl: "src/assets/images/categoryTab/03.jpg",
    cate: "Exhaust",
    title: "Performance Exhaust",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Borla",
    price: "$599.00",
    id: 3,
  },
  {
    imgUrl: "src/assets/images/categoryTab/04.jpg",
    cate: "Brakes",
    title: "Brembo Brake Pads",
    author: "assets/images/course/author/04.jpg",
    brand: "Brembo",
    price: "$299.00",
    id: 4,
  },
  {
    imgUrl: "src/assets/images/categoryTab/05.jpg",
    cate: "Tires",
    title: "All-Season Tires",
    author: "assets/images/course/author/05.jpg",
    brand: "Michelin",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: "src/assets/images/categoryTab/06.jpg",
    cate: "Lighting",
    title: "LED Headlights",
    author: "assets/images/course/author/06.jpg",
    brand: "Philips",
    price: "$149.00",
    id: 6,
  },
  {
    imgUrl: "src/assets/images/categoryTab/07.jpg",
    cate: "Interior",
    title: "Leather Seat Covers",
    author: "assets/images/course/author/01.jpg",
    brand: "Katzkin",
    price: "$499.00",
    id: 7,
  },
  {
    imgUrl: "src/assets/images/categoryTab/08.jpg",
    cate: "Wheels",
    title: "Alloy Wheels",
    author: "assets/images/course/author/02.jpg",
    brand: "Enkei",
    price: "$899.00",
    id: 8,
  },
];


const Products = () => {
  const [items, setItems] = useState(ProductData);

  const filterItem = () => {

  }

  return (
    <div className='course-section style-3 padding-tb'>
      <div className='course-shape one'><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
      <div className='course-shape two'><img src="/src/assets/images/shape-img/icon/02.png" alt="" /></div>

      {/* main */}
      <div className='container'>

        {/* header */}
        <div className='section-header'>
          <h2 className='title'>{title}</h2>
          <div className='course-filter-group'>
            <ul className='lab-ul'>
                <li onClick={() => filterItem("All")}>All</li>
                <li onClick={() => filterItem("All")}>Turbocharged</li>
                <li onClick={() => filterItem("All")}>Exhaust</li>
                <li onClick={() => filterItem("All")}>Suspension</li>
                <li onClick={() => filterItem("All")}>BBK</li>
            </ul>
          </div>
        </div>

        {/* body */}
        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 course-filter'>
            {
              items.map((product) => <div key={product.id} className='col'>
                <div className='course-item style-4'>
                    <div className='course-inner'>
                        <div className='course-thumb'>
                            <img src={product.imgUrl} alt="" />
                            <div className='course-category'>
                              <div className='course-cate'>
                                  <a href="#">{product.cate}</a>
                              </div>
                              <div className='course-reiew'>
                                  <Rating/>
                              </div>
                            </div>
                        </div>

                        {/* content */}
                        <div className='course-content'>
                          <Link to={`/shop${product.id}`}><h6>{product.title}</h6></Link>
                          <div className='course-footer'>
                            <div className='course-author'>
                              <Link to="/" className="ca-name">{product.brand}</Link>
                            </div>
                            <div className='course-price'>
                              {product.price}
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div>)
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default Products
