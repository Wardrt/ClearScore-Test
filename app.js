var express        = require("express");
var cors           = require("cors");
var morgan         = require("morgan");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var app            = express();

app.use(morgan("dev"));

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === "object" && "_method" in req.body){
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", express.static("public"));

app.get("/*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, function(){
console.log("Express is alive and kicking on port: ", 3000);
})