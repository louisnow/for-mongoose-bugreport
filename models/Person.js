const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const a = {
  age: { type: Number, required: true, default: 2 },
  name: String,
  status: {
    type: String,
    default: "waiting",
    enum: ["waiting"],
    required: true
  }
};

const p1 = new Schema(
  {
    ...a
  },
  { _id: false }
);

const p2 = new Schema(
  {
    ...a
  },
  { _id: false }
);

const person = new Schema({
  p1: p1,
  pmany: [{ type: p2, required: true, default: [] }]
});

p1.pre("validate", function(next) {
  console.log({ SINGLE_SUBDOC: this.age });
  next();
});

p2.pre("validate", function(next) {
  console.log({ ARRAY: this.age });
  next();
});

module.exports = mongoose.model("Person", person);
