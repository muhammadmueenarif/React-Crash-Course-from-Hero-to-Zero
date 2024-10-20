import "./App.css";
import { ProductCard } from "./components/ProductCard";
import { ProductList } from "./components/ProductList";

function App() {
  const product = {
    imgSrc: "https://via.placeholder.com/128x128",
    title: "Product 1",
    specification: [
      "i8 Pro Items available",
      "3 or 5 max sound",
      "5 hours battery",
    ],
    price: 999,
  };

  return (
    <div className="App">
      <ProductList>
        <ProductCard product={product} />
      </ProductList>

      <ProductList>
        <ProductCard product={product} />
      </ProductList>

      <ProductList>
        <ProductCard product={product} />
      </ProductList>
    </div>
  );
}

export default App;
