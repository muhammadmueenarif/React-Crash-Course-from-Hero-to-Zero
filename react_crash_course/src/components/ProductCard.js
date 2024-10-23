import styles from './ProductCard.module.css';
import { useState } from "react";
export function ProductCard({product, background="slategray", onPurchase, ...restProps}) {
 
  // const product = props.product;
    
      //using function to pass data. using function inside main rendering or return statement. 
    //   function getProductTitle(title) {
    //     return title;
    //   }
    
    const [stockCount, setStockCount] = useState(product.stockCount); //usestate for managing product stock. 
    //by default the amount of stock of product will be counted as initital value. 
    const [showMore, setShowMore] = useState(false); //by default no text in it.
    
    function handleClick() {
      setStockCount(stockCount - 1);
      onPurchase(product);
    }

    return  <article className={styles.Container} style={{background}}>
        {/* <h2>{getProductTitle(product.title)}</h2> use this if want to use function to pass data*/}
      
      <h2 style={{fontSize:"30px", color:"red"}}>{product.title}</h2>
      <img src={product.imgSrc} alt={product.title} />
      <p>Specifications: {" "} 
                {/*onclick of button the detail will show and hide with help of usetate. toggle button.*/}
        <button onClick={()=> setShowMore(!showMore)}>{showMore ? 'hide' : 'show'}</button> 
      </p>
        
     {showMore && <ul className={styles.List}>
        {product.specification.map((spec, index)=> {
          //not good practice to use array index as key as key prop can be deleed or change and cause issues. 
          return <li key={index}>{spec}</li> //if we remove key we get error in console
        })}
      </ul>}
      <Status stockCount={stockCount} />
      {/* if  productCount is 0 and not avaiable then buy button will not be displayed*/}
      {stockCount >0 && (
      <button onClick={handleClick}>{product.price}</button>
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
    const notAvailableTemplate = (<p className={styles.NotAvailableStatus}>Not Available</p> )
    const availableTemplate = (    <p className={styles.AvailableStatus}> {stockCount} items available</p> )
    // instead of writing complete expression in ? and :, we just put variable. 
    return stockCount===0? notAvailableTemplate
    : availableTemplate


  
  }
