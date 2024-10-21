const styles= {
    List: {
        gap:"16px",
        display: "flex",
        marginBottom:"36px"
    }
}

export function ProductList(props) {
  return (
    <>
    <h2>Products</h2>
    <div style={styles.List}>
        {props.children}
        </div>
    </>
  )
}
