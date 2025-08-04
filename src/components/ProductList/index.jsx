import React from "react";
import { Product } from "..";
import { useCartContext } from "../../context/useCartContext";
import styles from "./productList.module.css";

function ProductList() {
  const cartContext = useCartContext();
  const allProducts = cartContext.products;

  function renderProduct(product, index) {
    return <Product key={index} product={product} />;
  }
  function createProductList() {
    let productElements = [];
    for (let i = 0; i < allProducts.length; i++) {
      productElements.push(renderProduct(allProducts[i], i));
    }
    return productElements;
  }
  return (
    <div className={styles.productListContainer}>
      <h2 className={styles.heading}>Desserts</h2>
      <div className={styles.productsContainer}>
        {createProductList()}
      </div>
    </div>
  );
}
export default ProductList;

