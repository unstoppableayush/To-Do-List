const express=require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

let items = ["Buy Food" , "Eat food" , "Coding"];
const app=express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// app.get("/" , function(req , res){
//     var today = new Date();
    // var day="";
    // if(today.getDay()===6 || today.getDay()===0){
    //     day="Weekend";
    // }else{
    //     day="Weekday";
    // }

    // switch(today.getDay()){
    //     case 0 : day="Sunday";
    //             break;
    //     case 1 : day="Monday";
    //              break;
    //     case 2 : day="Tuesday";
    //               break;
    //     case 3 : day="Wednesday";
    //               break;           
    //     case 4 : day="Thursday";
    //              break;
    //     case 5 : day="Friday";
    //              break;
    //      case 6 : day="Satarday";
    //                  break;
    // }

//     let options ={
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     }

//     let day = today.toLocaleDateString("en-US" , options);

//     res.render("list" , {kindofday:day , newListItem : items});

    
// });

//in the place of above commented code we can use using export module

app.get("/" , function(req , res){
    let day = date();
    res.render("list", {kindofday:day , newListItem: items});
});

//handle post request

app.post("/",function(req , res){
    let item=req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
})