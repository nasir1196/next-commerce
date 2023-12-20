import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { products } from "./../../../utils/product";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  return (
    <div>
      <ProductDetails products={products} productId={params} />
    </div>
  );
};

export default Product;
