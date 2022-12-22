import axios from "axios";
const getProduct = async () => {
  return await axios.get("products.json");
};
export default getProduct;
