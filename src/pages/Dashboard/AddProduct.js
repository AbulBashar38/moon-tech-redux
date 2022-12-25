import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sendData, updateData } from "../../redux/actionCreators/productAction";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products.product);

  const submit = (data) => {
    if (id) {
      const product = {
        model: data.model,
        image: data.image,
        brand: data.brand,
        status: data.status === "true" ? true : false,
        price: data.price,
        keyFeature: [
          data.keyFeature1,
          data.keyFeature2,
          data.keyFeature3,
          data.keyFeature4,
        ],
        spec: [],
      };
      dispatch(updateData(id, product));
    } else {
      const product = {
        model: data.model,
        image: data.image,
        brand: data.brand,
        status: data.status === "true" ? true : false,
        price: data.price,
        keyFeature: [
          data.keyFeature1,
          data.keyFeature2,
          data.keyFeature3,
          data.keyFeature4,
        ],
        spec: [],
      };
      dispatch(sendData(product));
    }
  };
  useEffect(() => {
    if (id) {
      const product = products.find((product) => product._id === id);
      reset({
        model: product.model,
        image: product.image,
        brand: product.brand,
        price: product.price,
        status: product.status,
        keyFeature1: product.keyFeature[0],
        keyFeature2: product.keyFeature[1],
        keyFeature3: product.keyFeature[2],
        keyFeature4: product.keyFeature[3],
      });
    } else {
      reset({
        model: "",
        image: "",
        brand: "amd",
        price: "",
        status: true,
        keyFeature1: "",
        keyFeature2: "",
        keyFeature3: "",
        keyFeature4: "",
      });
    }
  }, [products, id, reset]);
  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="model">
            Model
          </label>
          <input type="text" id="model" {...register("model")} />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input type="text" name="image" id="image" {...register("image")} />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="brand">
            Brand
          </label>
          <select name="brand" id="brand" {...register("brand")}>
            <option value="amd">AMD</option>
            <option value="intel">Intel</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="price">
            Price
          </label>
          <input type="text" name="price" id="price" {...register("price")} />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <h1 className="mb-3">Availability</h1>
          <div className="flex gap-3">
            <div>
              <input
                type="radio"
                id="available"
                value={true}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="available">
                Available
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="stockOut"
                name="status"
                value={false}
                {...register("status")}
              />
              <label className="ml-2 text-lg" htmlFor="stockOut">
                Stock out
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs"></div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature1">
            Key Feature 1
          </label>
          <input
            type="text"
            name="keyFeature1"
            id="keyFeature1"
            {...register("keyFeature1")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature2">
            Key Feature 2
          </label>
          <input
            type="text"
            name="keyFeature2"
            id="keyFeature2"
            {...register("keyFeature2")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature3">
            Key Feature 3
          </label>
          <input
            type="text"
            name="keyFeature3"
            id="keyFeature3"
            {...register("keyFeature3")}
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="keyFeature4">
            Key Feature 4
          </label>
          <input
            type="text"
            name="keyFeature4"
            id="keyFeature4"
            {...register("keyFeature4")}
          />
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            className={`px-4 py-3 ${
              id ? "bg-lime-500" : "bg-indigo-500"
            } rounded-md font-semibold text-white text-lg disabled:bg-gray-500`}
            type="submit"
          >
            {id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
