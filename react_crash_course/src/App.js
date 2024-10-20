import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { ProductList } from "./components/ProductList";

function App() {
  const products = [{
    imgSrc: "https://via.placeholder.com/128x128",
    title: "Product 1",
    specification: [
      "i8 Pro Items available",
      "3 or 5 max sound",
      "5 hours battery",
    ],
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
    price: 1499,
  }
]

function handleClick(product) {
  alert(`You clicked on ${product.title} which costs ${product.price}`)
}

  return (
    <div className="App">
      <ProductList>
        <ProductCard product={products[0]} onClick={handleClick}/>
      </ProductList>

      <ProductList>
        <ProductCard product={products[1]} onClick={handleClick} />
      </ProductList>

      <ProductList>
        <ProductCard product={products[2]} onClick={handleClick}/>
      </ProductList>
    </div>
  );
}

export default App;
