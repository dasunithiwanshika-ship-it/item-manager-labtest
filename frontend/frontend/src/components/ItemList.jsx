import api from "../api";

export default function ItemList({ items, fetchItems }) {

  const deleteItem = async (id) => {
    await api.delete(`/${id}`);
    fetchItems();
  };

  return (
    <div>
      {items.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}