const express=require("express");
const calcu=express();
const bodyparser=require("body-parser");

calcu.use(bodyparser.urlencoded({extended:true}));

calcu.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

calcu.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1+num2;
    res.send("The result of the numbers is "+result);
});

calcu.get("/bmi",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

calcu.post("/bmi",function(req,res){
    var h=Number(req.body.Height);
    var w=Number(req.body.Weight);
    var n=w/(h*h);
    res.send("Your BMI is "+ n);

});
calcu.listen(3000, function(){
    console.log("Server sarted");
});