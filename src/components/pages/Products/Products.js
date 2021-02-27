import React from "react";
import "./Products.css";

function Products() {
  const products = {
    backgroundImage:
      " url('https://media.cntraveler.com/photos/57211a94fe5fd76f60bc2760/master/w_2048,h_1536,c_limit/deserts-gobi-cr-GettyImages-582205681.jpg')",
    backgroundPosition: "center",
    backgroundSize: "fill",
    backgroundRepeat: "no-repeat",

    color: "#fff",
    fontSize: "100px",
    height: "700px",
  };
  return <h1 style={products}>PRODUCTS</h1>;
}

export default Products;
