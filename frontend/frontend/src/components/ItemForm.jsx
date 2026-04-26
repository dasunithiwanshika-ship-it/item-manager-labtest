import { useState } from "react";
import api from "../api";

export default function ItemForm({ fetchItems }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/", form);
    fetchItems();
  };

  return (
    <form onSubmit={submit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="price" onChange={handleChange} placeholder="Price" />
      <input name="category" onChange={handleChange} placeholder="Category" />
      <input name="description" onChange={handleChange} placeholder="Description" />
      <button>Add Item</button>
    </form>
  );
}