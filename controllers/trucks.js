import Truck from "../models/Truck.js";

export const getTrucks = async (req, res) => {
  try {
    const trucks = await Truck.find();
    res.json(trucks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getTruck = async (req, res) => {
  const { id } = req.params;

  const truck = await Truck.findById(id);

  if (truck) {
    return res.json(truck)
  }

  res.status(404).json({ message: "Truck not found" });
};

export const createTruck = async (req, res) => {
  const truck = new Truck(req.body);
  await truck.save();
  res.status(201).json(truck);
};

export const updateTruck = async (req, res) => {
  const { id } = req.params;
  const truck = await Truck.findByIdAndUpdate(id, req.body);
  res.status(201).json(truck);
};

export const deleteTruck = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Truck.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Truck deleted!");
    }

    throw new Error("Truck not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};