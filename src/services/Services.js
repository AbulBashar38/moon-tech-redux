import axios from "axios";
export const getProduct = async () => {
  return await axios.get("http://localhost:5000/products");
};
export const sendProduct = async (product) => {
  return await axios.post("http://localhost:5000/product", { product });
};
export const deleteProduct = async (id) => {
  return await axios.delete(`http://localhost:5000/product/${id}`);
};
export const updateProduct = async (id, product) => {
  return await axios.put(`http://localhost:5000/updateProduct/${id}`, product);
};
