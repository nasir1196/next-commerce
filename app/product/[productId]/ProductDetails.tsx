"use client";

import { Rating } from "@mui/material";
import { formatPrice } from "../../../utils/formatPrice";
import Container from "../../components/Container";
import Image from "next/image";
import { useCallback, useState } from "react";
import SelectColor from "../../components/productsFetcher/SelectColor";

interface ProductDetailsProps {
  products: any;
  productId: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  map(
    arg0: (image: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  products,
  productId,
}) => {
  const pDetails = products.filter((pd: any) => pd.id === productId.productId);
  const product = pDetails[0];
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex items-center justify-center">
          <div className="aspect-video overflow-hidden relative w-full">
            <Image
              src={product.images[0].image}
              alt={product.name}
              fill
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1 text-slate-500 text-sm">
          <h1 className="text-3xl font-medium text-slate-700">
            {product.name}
          </h1>
          <p className="text-2xl font-bold text-slate-700">
            {formatPrice(product.price)}
          </p>
          <div className="flex items-center gap-2">
            <Rating value={productRating} readOnly />
            <div>{product.reviews.length} Reviews</div>
          </div>
          <Horizontal />
          <div className="text-justify">
            <h1 className="text-2xl text-slate-800">Product Details</h1>
            <p>{product.description}</p>
          </div>
          <Horizontal />
          <div>
            <span className="font-semibold">Category:</span> {product.category}
          </div>
          <div>
            <span className="font-semibold">Brand:</span> {product.brand}
          </div>
          <div
            className={
              product.inStock
                ? "font-semibold text-teal-400"
                : "font-semibold text-rose-500"
            }
          >
            {product.inStock ? "In stock" : "Out of stock"}
          </div>
          <Horizontal />
          <SelectColor
            cartProduct={cartProduct}
            images={product.images}
            handleColorSelect={handleColorSelect}
          />
          <Horizontal />
          <div>quantity</div>
          <Horizontal />
          <div>add to cart</div>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-3xl font-semibold text-slate-800 text-center my-7">
          Customer Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.reviews.map((rev: any) => {
            const getName = products.filter(
              (item: any) => item.id === rev.productId
            );
            return (
              <div
                className="border-[1.3px] border-teal-500 rounded-md p-3"
                key={rev.id}
              >
                <h2 className="font-semibold text-slate-500">
                  Product: {getName[0].name}
                </h2>
                <p className="text-slate-600">
                  <span className="text-sm font-semibold mr-2">
                    Customer Comment:{" "}
                  </span>
                  {rev.comment}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
