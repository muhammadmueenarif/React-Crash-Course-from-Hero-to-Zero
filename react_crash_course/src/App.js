import styles from "./App.module.css";
import { useState } from "react";
import { ProductCard } from "./components/ProductCard";    
import { Fragment }from "react";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFIlter";
function App() {
  const products = [
    {
      id:1,
      imgSrc: "https://via.placeholder.com/128x128",
      title: "Product 1",
      specification: [
        "i8 Pro Items available",
        "3 or 5 max sound",
        "5 hours battery",
      ],
      stockCount:10,
      price: 999,
    },
    {
      id:2,
      imgSrc: "https://via.placeholder.com/128x128",
      title: "Product 2",
      specification: [
        "i7 Pro Items available",
        "3 or 5 max sound",
        "5 hours battery",
      ],
      stockCount:0,
      price: 1299,
    },
    {
      id:3,
      imgSrc: "https://via.placeholder.com/128x128",
      title: "Product 3",
      specification: [
        "i9 Pro Items available",
        "3 or 5 max sound",
        "5 hours battery",
      ],
      stockCount:6,
      price: 1499,
    },
  ];

  const [filters, setFilters] = useState({
    price:{
      min:0,
      max:999,
    },
    other:"other value"});

    const [favorites, setFavorites] = useState([]);

  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which costs ${product.price}`);
  }

  function handleFilter(key, value) {
  //filter has min 0, max 99 and we want to update max to 500. 
   setFilters((prevFilters)=> ({
    ...prevFilters, 
    // [key]:value,
    price: {
      ...prevFilters.price,
      [key]: value, 
    },
   }))
  }

  function handleFavorite(productId) {
    // check if product already exist in favorite
    if (favorites.includes(productId)) {
      //remove
      setFavorites((prevFavorites)=> prevFavorites.filter(id => id !== productId))
    }
    else {
      //add
      setFavorites((prevFavorites)=> [...prevFavorites, productId]);
    }
  }
  return (
    <div className={styles.App}>
      <ProductList>
        {products.map((product) => { //map method iterates each item in array and return that item.  
          return <ProductCard key={product.title} product={product} 
          onPurchase={handlePurchase}
          onFavorite={handleFavorite} />;
          //we need key for product as react need specific id to render the specific product else it will 
          //render all item and cannot figure which item i need to make changes.  not good to use array index as 
          //key as array index can be deleed or change and cause issues. 
          //if we remove key we get error in console
        })} 
      </ProductList>
      <h2>Product Filtered by Price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter}/>

        {products.filter(({price})=> price>=filters.price.min &&price<=filters.price.max).map(({title, price})=> (
          <Fragment key={title}>
          <hr className={styles.ListDivider}/>
            <p className={styles.ListTitle}> {title} costs ${price} </p>
          </Fragment>
        ))}

    </div>
  );
}

export default App;
