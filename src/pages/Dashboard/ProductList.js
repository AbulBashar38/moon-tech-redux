import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteData, getData } from "../../redux/actionCreators/productAction";

const ProductList = () => {
  const products = useSelector((state) => state.product.products.product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div className="flex flex-col justify-center items-center h-full w-full ">
      <div className="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <div className="font-semibold text-gray-800">Products</div>
        </header>

        <div className="overflow-x-auto p-3">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th></th>
                <th className="p-2">
                  <div className="font-semibold text-left">Product Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Brand</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">In Stock</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-left">Price</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Action</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Edit</div>
                </th>
              </tr>
            </thead>

            <tbody className="text-sm divide-y divide-gray-100">
              {products.map(({ model, brand, price, status, _id }) => (
                <tr id={_id}>
                  <td className="p-2">
                    <input type="checkbox" className="w-5 h-5" value="id-1" />
                  </td>
                  <td className="p-2">
                    <div className="font-medium text-gray-800">{model}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-left capitalize">{brand}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-left">
                      {status ? (
                        <p className="text-green-500 font-medium">Available</p>
                      ) : (
                        <p className="text-red-500 font-medium">Stock out</p>
                      )}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-left font-medium text-indigo-500">
                      {price}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          dispatch(deleteData(_id));
                          window.location.reload();
                        }}
                      >
                        <svg
                          className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center">
                      <Link to={`/dashboard/update/${_id}`}>
                        <svg
                          className="w-8 h-8 hover:text-red-500 rounded-full hover:bg-gray-100 p-1"
                          stroke="currentColor"
                          viewBox="0 0 40 40"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="m28.6 4.17-.77-.77a3.075 3.075 0 0 0 -4.24 0l-4.6 4.6h-13.99a3.009 3.009 0 0 0 -3 3v16a3.009 3.009 0 0 0 3 3h16a3.009 3.009 0 0 0 3-3v-13.99l4.6-4.6a3 3 0 0 0 0-4.24zm-2.18.64.77.77a1.008 1.008 0 0 1 0 1.42l-.353.353-2.19-2.19.353-.353a1.047 1.047 0 0 1 1.42 0zm-3.188 1.768 2.19 2.19-11.522 11.523-2.19-2.19zm-12.663 13.211 1.542 1.542-2.831 1.079zm11.431 7.211a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1-1v-16a1 1 0 0 1 1-1h11.99l-7.39 7.388-.01.012-.008.012-.012.012a.831.831 0 0 0 -.19.26l-3.03 6.136a1 1 0 0 0 1.26 1.37l6.62-2.53a.929.929 0 0 0 .35-.23l.012-.012.012-.008.008-.012 7.388-7.388z" />
                        </svg>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
