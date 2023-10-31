import mongoose from "mongoose";

const Schema = mongoose.Schema;

let TruckSchema = new Schema({
  category: { type: String },
  role: { type: String },
  avgWheelCount: { type: Number },
  avgLength: { type: Number },
  img: { type: String },
});

export default mongoose.model("trucks", TruckSchema);
// [
//     {
//       "category": "Fire Engine",
//       "role": "Fire and emergency assistance",
//       "avgWheelCount": 18,
//       "avgLength": 50,
//       "img": "fireEngine.jpg"
//     },
// ]


// [
//     {
//       "category": "Big Rig",
//       "role": "Moving heavy weight materials",
//       "avgWheelCount": 18,
//       "avgLength": 50,
//       "img": "bigRig.jpg"
//     },
// ]


// [
//     {
//       "category": "Bulldozer",
//       "role": "Shoveling large material",
//       "avgWheelCount": 18,
//       "avgLength": 50,
//       "img": "bullDozer.jpg"
//     },
// ]


// [
//     {
//       "category": "Tractor",
//       "role": "Agricultural assistance",
//       "avgWheelCount": 6,
//       "avgLength": 25,
//       "img": "tractor.jpg"
//     },
// ]

// [
//     {
//       "category": "Giant Excavator",
//       "role": "Large scale lifting and shoveling",
//       "avgWheelCount": 2,
//       "avgLength": 40,
//       "img": "giantExcavator.jpg"
//     },
// ]

// [
//     {
//       "category": "Airport Fire Truck",
//       "role": "Fire assistance designed for airplanes",
//       "avgWheelCount": 18,
//       "avgLength": 45,
//       "img": "airportFireTruck.jpg"
//     },
// ]

// [
//     {
//       "category": "Fire Chief's Truck",
//       "role": "Administrative work alongside bigger",
//       "avgWheelCount": 6,
//       "avgLength": 25,
//       "img": "fireChiefsTruck.jpg"
//     },
// ]

// [
//     {
//       "category": "Snow Plow",
//       "role": "Moving snow",
//       "avgWheelCount": 6,
//       "avgLength": 30,
//       "img": "snowPlow.jpg"
//     },
// ]

// [
//     {
//       "category": "School Bus",
//       "role": "Student transportation",
//       "avgWheelCount": 6,
//       "avgLength": 40,
//       "img": "schoolBus.jpg"
//     },
// ]

// [
//     {
//       "category": "Skid Steer",
//       "role": "Narrow space lifting and pushing",
//       "avgWheelCount": 4,
//       "avgLength": 15,
//       "img": "skidSteer.jpg"
//     },
// ]

// [
//     {
//       "category": "Concrete Mixer",
//       "role": "Continually mixes and distributes concrete",
//       "avgWheelCount": 6,
//       "avgLength": 40,
//       "img": "concreteMixer.jpg"
//     },
// ]

// [
//     {
//       "category": "Dump Truck",
//       "role": "Large load moving",
//       "avgWheelCount": 6,
//       "avgLength": 40,
//       "img": "dumpTruck.jpg"
//     },
// ]