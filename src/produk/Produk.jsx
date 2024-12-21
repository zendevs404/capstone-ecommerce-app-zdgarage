import React, { useState } from 'react'
import Data from "../products.json"
import CardProduk from './CardProduk';
import Search from './Search';

const showResults = "Showing 01-20 of 100 results"

const Produk = () => {
    // const []
    const [products, setProducts] = useState(Data);
    const [GridList, setGridList] = useState(true);
    // console.log(products)
  return (
    <div>
      <div className='shop-page padding-tb'>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-lg-8 col-12 mt-5'>
                    <article>
                        {/* title */}
                        <div className='shop-title d-flex flex-wrap justify-content-between'>
                            <p>{showResults}</p>
                        </div>

                        {/* card */}
                        <div>
                            <CardProduk products={products} GridList={GridList}/>
                        </div>
                    </article>
                </div>
                <div className='col-lg-4 col-12 mt-5'>
                    <aside>
                        <Search products={products} />
                    </aside>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Produk
