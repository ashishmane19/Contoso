var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Chief Mentor :Ravi Tambade");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso company pvt. ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>we provide world class solution to our customers</li>"+
                    " <li>we have 12 offices all over the world</li>"+
                    " <li>join us to grow </li>"+
                    " <li>to know more visit our website: contoso.com</li>"+
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
