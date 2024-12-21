import React, { useState } from 'react'
import productData from "../products.json"
import { Link } from 'react-router-dom'
import SelectedCat from '../components/SelectedCat'

const title = (
    <h2>Search Your Own <span>Racing Parts</span> Now!</h2>
)
const desc = "Unleash Speed, Power, and Precision – Your Race, Our Parts!"
const bannerList = [
    {
    iconName: "icofont-award",
    text: "Top Quality Parts",
    },
    {
    iconName: "icofont-building-alt",
    text: "More than 100 one-stop-services",
    },
    {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
    },
    ];

const banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData);
    // console.log(productData);

    // search func
    const handleSearch = e => {
        console.log(e.target.value)
        const searchTerm = e.target.value
        setSearchInput(searchTerm);

        // filter products
        const filtered = productData.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
            {title}
            <form>
                <SelectedCat select={"all"}/>
                <input type="text" name='search' placeholder='Search your product' value={searchInput} onChange={handleSearch} />
                <button type='submit'><i class="icofont-ui-search"></i>
                </button>
            </form>
            <p>{desc}</p>
            <ul className='lab-ul'>
                {
                    searchInput && filteredProducts.map((product, i) => <li key={i}>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </li> )
                }
            </ul>
        </div>
      </div>
    </div>
  )
}

export default banner
