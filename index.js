const express = require('express');
const path = require("path");
const hbs = require('hbs');
// const weather_data = require("../utils/weatherData")
const app = express();

const staticPath = path.join(__dirname, "./public");


const viewPath = path.join(__dirname, "./templates/views");
const partialPath = path.join(__dirname,"./templates/partials");

app.set("view engine","hbs");
app.set("views",viewPath);
hbs.registerPartials(partialPath);


app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render("index",{
        title:"Weather App",
    }); 
});



app.get("*",(req,res)=>{
    res.render('404',{
        title:"Page Not Found",
    });
});

app.listen(5000,()=>{
    console.log("Server is running at port no.5000");
})