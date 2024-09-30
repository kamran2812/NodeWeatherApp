const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path")
const hbs = require("hbs")

const staticpath = path.join(__dirname, "../public");
const temp_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', temp_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticpath))
app.get("",(req,res)=>{
res.render("index")
});
app.get("/about",(req,res)=>{
res.render("about")
});
app.get("/weather",(req,res)=>{
res.render("weather")
});
app.get("/news",(req,res)=>{
res.render("news")
});
app.get("/about/*", (req,res)=>{
    res.render("404error")
  })
app.get("/about/*", (req,res)=>{
    res.render("weather")
  })
app.get("*",(req,res)=>{
res.render("404error",{
    errormsg:"Oppss! Page Not Found"
})
});

app.listen(port,()=>{
    console.log(`listening to the port at ${port}`)
})