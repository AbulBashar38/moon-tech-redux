import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { filterBrand, filterStock } from "../redux/actionCreators/filterAction";
import { getData } from "../redux/actionCreators/productAction";

const Home = () => {
  const dispatch = useDispatch();

  const { brands, stock } = useSelector((state) => state.filter.filters);
  const products = useSelector((state) => state.product.products.product);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const activeClass = "text-white bg-indigo-500 border-white";

  let content;

  if (products.length) {
    content = products.map((product) => (
      <ProductCard product={product} key={product._id}></ProductCard>
    ));
  }
  if (products.length && (stock || brands.length)) {
    content = products
      .filter((product) => {
        if (stock) {
          return product.status === true;
        }
        return product;
      })
      .filter((product) => {
        if (brands.length) {
          return brands.includes(product.brand);
        }
        return product;
      })
      .map((product) => (
        <ProductCard product={product} key={product._id}></ProductCard>
      ));
  }
  return (
    <div className="max-w-7xl gap-14 mx-auto my-10">
      <div className="mb-10 flex justify-end gap-5">
        <button
          onClick={() => dispatch(filterStock())}
          className={`border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          }`}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(filterBrand("amd"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("amd") ? activeClass : null
          }`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(filterBrand("intel"))}
          className={`border px-3 py-2 rounded-full font-semibold ${
            brands.includes("intel") ? activeClass : null
          }`}
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
        {content}
      </div>
    </div>
  );
};

export default Home;
