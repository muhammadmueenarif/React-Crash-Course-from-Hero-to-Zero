import styles from "./App.module.css";
import { useState } from "react";
import { ProductCard } from "./components/ProductCard";    
import { Fragment }from "react";
import { products as productsData } from "./data/products";
import { ProductList } from "./components/ProductList";
import { ProductFilter } from "./components/ProductFIlter";
function App() {

  const [products, setProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    price:{
      min:0,
      max:999,
    },
    other:"other value"});

    const [favorites, setFavorites] = useState([]);

  function handlePurchase(productId, stockCount) {
    // alert(`You clicked on ${product.title} which costs ${product.price}`);
    // update stock count
    setProducts((prevProducts) => prevProducts.map((product) => product.id === productId? 
    {...product, stockCount: stockCount} : product
      )
    );
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
          isFavorite={favorites.includes(product.id)} 
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
