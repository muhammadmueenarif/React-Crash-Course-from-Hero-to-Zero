export function ProductCard({product, background="slategray", onClick, ...restProps}) {
 
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
        {product.specification.map((spec, index)=> {
          //not good practice to use array index as key as key prop can be deleed or change and cause issues. 
          return <li key={index}>{spec}</li> //if we remove key we get error in console
        })}
      </ul>
      <Status stockCount={product.stockCount} />
      {/* if  productCount is 0 and not avaiable then buy button will not be displayed*/}
      {product.stockCount >0 && (
      <button onClick={()=> onClick(product)}>{product.price}</button>
    )}
    </article>
    
  }

  function Status({stockCount}) {
    // if else
    // if (stockCount===0) {
    //   return <p style={{color:"lightsalmon"}}>Not Available</p>
    // } 
    // return <p style={{color:"lightgreen"}}> {stockCount} items available</p>

    // instead of if else we can use ternary operator
    const notAvailableTemplate = (<p style={{color:"lightsalmon"}}>Not Available</p> )
    const availableTemplate = (    <p style={{color:"lightgreen"}}> {stockCount} items available</p> )
    // instead of writing complete expression in ? and :, we just put variable. 
    return stockCount===0? notAvailableTemplate
    : availableTemplate


  
  }
