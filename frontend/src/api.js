import axios from "axios";

export default axios.create({
  baseURL: "https://item-manager-labtest-production.up.railway.app/api/items"
});