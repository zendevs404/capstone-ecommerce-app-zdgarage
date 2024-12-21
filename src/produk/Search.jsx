import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Search = ({products}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div>
      <div className='widget widget-search'>
        {/* search body */}
        <form className='search-wrapper mb-1'>
            <input type="text" name='search' id='search' placeholder='Search Products...' defaultValue={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button type='submit'>
                <i className='icofont-search'></i>
            </button>
        </form>

        {/* show searched */}
        <div>
            {
                searchTerm && filteredProducts.map((product) => (
                    <Link key={product.id} to={`/produk/${product.id}`}>
                        <div className='d-flex gap-3 p-2'>
                            <div>
                                <div className='pro-thumb h-25'>
                                    <img src={product.img} alt="" width={70} className='flex-{grow|shrink}-0'/>
                                </div>
                            </div>

                            <div className='product-content'>
                                <p>
                                    <Link to={`/produk/${product.id}`}>{product.name}</Link>
                                </p>
                                <h6>{product.price}</h6>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Search
