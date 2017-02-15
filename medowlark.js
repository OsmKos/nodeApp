var express = require("express");

var app = express();
var handlebars = require("express-handlebars")
.create({defaultLayout: "main"});
var mottoes = [
  "Hear me roar",
  "Winder is coming",
  "Fire and blood",
  "We do not sow",
  "As high as honour",
];
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000);

app.use(express.static("D:/js/projects/nodeApp" + "/public"));

app.get("/", function (req, res) { //app.get добавление маршрутов
  res.render("home");        //код по умолчанию - 200
});

app.get("/about", function (req, res) {
  var randomMotto = mottoes[Math.floor(Math.random()*mottoes.length)];
  res.render("about",{motto: randomMotto});
});

app.use(function(req, res) { //пользовательская страница 404
  res.status(404);
  res.render("404");
});

app.use(function(err, req, res, next) { // пользовательская страница 500
  console.error(err.stack);
  res.status(500);
  res.render("500");
});



app.listen(app.get("port"), function() {
  console.log("Express started on http://localhost:"+app.get("port"));
});
