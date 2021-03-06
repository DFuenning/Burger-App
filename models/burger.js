var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  create: function (name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function (id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};
//   create: function(name, cb) {
//     orm.create("burgers", , function(res) {
//       cb(res);
//     });
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.delete("burgers", id, function(res) {
//       cb(res);
//     });
//   }
// };

module.exports = burger;