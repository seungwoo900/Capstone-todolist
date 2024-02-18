import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August",
"September","October","November","December"];

const todoList = [];
const today = new Date();
const dayOfWeek = days[today.getDay()];
const month = months[today.getMonth()];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.render("index.ejs",{
        todoList: todoList,
        dayOfWeek: dayOfWeek,
        month: month,
        today: today,
    });
});

app.post("/", (req,res) => {
    todoList.push(req.body["todo"]);
    res.redirect("/");
});

app.post("/edit/:index", (req,res) => {
    const index = req.params.index;
    const updatedToDo = req.body.updatedToDo;
    todoList[index] = updatedToDo;
    res.redirect("/");
});

/*
couldn't implement edit function properly / after reloading the page, it keeps going back
*/

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

