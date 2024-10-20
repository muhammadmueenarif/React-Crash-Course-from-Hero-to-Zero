export function ProductCard(props) {
 
    
      //using function to pass data. using function inside main rendering or return statement. 
    //   function getProductTitle(title) {
    //     return title;
    //   }

    return  <article style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", border:"2px solid white", gap:"16"}}>
        {/* <h2>{getProductTitle(product.title)}</h2> use this if want to use function to pass data*/}
      
      <h2 style={{fontSize:"30px", color:"red"}}>{props.product.title}</h2>
      <img src={props.product.imgSrc} alt={props.product.title} />
      <p>Product Description</p>
      <ul>
        <li>{props.product.specification[0]}</li>
        <li>{props.product.specification[1]}</li>
        <li>{props.product.specification[2]}</li>
      </ul>
      <button>{props.product.price}</button>
    </article>
    
  }
