function myNes() {
  var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs",
      },
      "outside": {
        "trunk": "jack",
      },
    },
  };
  var gloveBoxContent;
  gloveBoxContent = myStorage.car.inside["glove box"];
  return gloveBoxContent;
}
console.log(myNes());
module.exports = myNes;
