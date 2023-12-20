"use client";
import { motion } from "framer-motion";
import { products } from "../../../utils/product";
import ProductCart from "./ProductCart";

const ProductContainer = () => {
  return (
    <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {products.map((product: any) => (
        <ProductCart key={product.id} data={product} />
      ))}
    </motion.div>
  );
};

export default ProductContainer;
