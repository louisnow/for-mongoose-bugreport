require("dotenv").config();
require("./db");
const Person = require("./models/Person");

(async function() {
  await new Person({
    p1: { name: "Steve" },
    pmany: [{ name: "Harry" }]
  }).save();
  const cre = await Person.findOne({ "person.name": "Steve" }).exec();
  const updatedObj = { p1: { name: "Smith" }, pmany: [{ name: "Potter" }] };
  Object.assign(cre, updatedObj);
  await cre.save();
})();
