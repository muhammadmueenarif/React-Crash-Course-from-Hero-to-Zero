export function ProductCard() {
    const product={
        imgSrc: 'https://via.placeholder.com/128x128',
        title: 'Product 1',
        specification: [
            "i8 Pro Items available",
            "3 or 5 max sound",
            "5 hours battery"
        ],
        price: 999,
      };
    
    return  <article>
      <h2>{product.title}</h2>
      <img src={product.imgSrc} alt={product.title} />
      <p>Product Description</p>
      <ul>
        <li>{product.specification[0]}</li>
        <li>{product.specification[1]}</li>
        <li>{product.specification[2]}</li>
      </ul>
      <button>{product.price}</button>
    </article>
    
  }
