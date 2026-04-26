import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: ""
  });

  const fetchItems = async () => {
    const res = await api.get("/");
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/", form);
    fetchItems();
  };

  const deleteItem = async (id) => {
    await api.delete(`/${id}`);
    fetchItems();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Item Manager</h1>

      <form onSubmit={submit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="price" placeholder="Price" onChange={handleChange} />
        <input name="category" placeholder="Category" onChange={handleChange} />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <button>Add Item</button>
      </form>

      <hr />

      {items.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <p>Category: {item.category}</p>
          <p>{item.description}</p>

          <button onClick={() => deleteItem(item._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;