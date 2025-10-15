const MenuModels = require("../model/MenuModel");

const getData = async function (req, res, next) {
  try {
    const data = await MenuModels.find({});
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getSingleData = async function (req, res, next) {
  try {
    const data = await MenuModels.findById(req.params.id);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteData = async function (req, res, next) {
  try {
    const result = await MenuModels.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).send({ message: "Item not found" });
    }
    res
      .status(200)
      .send({ message: "Item deleted successfully", item: result });
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateData = async (req, res) => {
  try {
    const updatedItem = await MenuModels.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedItem)
      return res.status(404).send({ message: "Item not found" });
    res.status(200).send(updatedItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

const createData = async (req, res) => {
  try {
    const newItem = new MenuModels(req.body);
    const savedItem = await newItem.save();
    res.status(201).send(savedItem);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getData,
  getSingleData,
  deleteData,
  createData, 
  updateData
};
