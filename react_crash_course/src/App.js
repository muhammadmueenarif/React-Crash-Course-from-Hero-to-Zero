import "./App.css";
import { ProductCard } from "./components/ProductCard";    
import { Fragment }from "react";
import { ProductList } from "./components/ProductList";

const styles = {
  ListDivider:{
    borderColor:"slategray",
  },
  ListTitle:{
    margin:"8px 0",
  },
}

function App() {
  const products = [
    {
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

  function handlePurchase(product) {
    alert(`You clicked on ${product.title} which costs ${product.price}`);
  }

  return (
    <div className="App">
      <ProductList>
        {products.map((product) => { //map method iterates each item in array and return that item.  
          return <ProductCard key={product.title} product={product} onPurchase={handlePurchase} />;
          //we need key for product as react need specific id to render the specific product else it will 
          //render all item and cannot figure which item i need to make changes.  not good to use array index as 
          //key as array index can be deleed or change and cause issues. 
          //if we remove key we get error in console
        })} 
      </ProductList>
      <h2>Product which costs upto 1400$:</h2>

        {products.filter(({price})=> price<1400).map(({title, price})=> (
          <Fragment key={title}>
          <hr style={styles.ListDivider}/>
            <p style={styles.ListTitle}> {title} costs ${price} </p>
          </Fragment>
        ))}

    </div>
  );
}

export default App;
