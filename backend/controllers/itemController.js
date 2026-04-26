const Item = require("../models/Item");

// Create
exports.createItem = async (req, res) => {
  const item = await Item.create(req.body);
  res.json(item);
};

// Get all
exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// Update
exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

// Delete
exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};