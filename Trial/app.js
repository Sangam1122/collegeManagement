const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");




const app = express();



app.set("view engine", "ejs");



mongoose.connect("mongodb://localhost:27017/collegeManagementDB");


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// ___________________________loginpage_______________________

app.get("/login",function(req,res){

res.render("login",{});

});
// ___________________________loginpage_______________________

// ------------------------dashboard----------------------------
app.post("/login",function(req,res){

res.redirect("/login/dashboard");

});
// ------------------------dashboard----------------------------

// registrationHodAndTechers
app.get("/registrationHodAndTeachers",function(req,res){
  res.render("registrationHodAndTeachers",{});
});
// /registrationHodAndTechers

app.get("/login/dashboard",function(req,res){

  res.render("principleDashboard",{});
})



app.get("/login/startPage",function(req,res){

  res.render("htmlfiles/startPage",{});
});


app.get("/login/:topicName",function(req,res){
var topicName= req.params.topicName ;

res.render("htmlfiles/"+topicName+".ejs",{});

})






app.listen(4000, function() {
  console.log("Server started on port 4000");
});
