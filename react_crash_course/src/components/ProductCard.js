export function ProductCard({product, background="slategray"}) {
 
  // const product = props.product;
    
      //using function to pass data. using function inside main rendering or return statement. 
    //   function getProductTitle(title) {
    //     return title;
    //   }

    return  <article style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", border:"2px solid white", gap:"16"}}>
        {/* <h2>{getProductTitle(product.title)}</h2> use this if want to use function to pass data*/}
      
      <h2 style={{fontSize:"30px", color:"red"}}>{product.title}</h2>
      <img src={product.imgSrc} alt={product.title} />
      <p>Product Description</p>
      <ul>
        <li style={{background}}>{product.specification[0]}</li>
        <li style={{background:"peru"}}>{product.specification[1]}</li>
        <li style={{background:"orange"}}>{product.specification[2]}</li>
      </ul>
      <button>{product.price}</button>
    </article>
    
  }
