const express = require("express");

const bodyParser = require("body-parser");



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine","ejs");
var items=[];

app.get("/", (req, res) => {
  //   let currentDay = today.getDay();
  //   let day = "";

  //   if (currentDay === 6 || currentDay === 0) {
  //     // res.send(" wooho ! party time");
  //     day = "weekend";
  //   } else {
  //     day = "weekdays";

  //     // res.sendFile(__dirname + "/index.html");
  //   }

  // switch(currentDay) {
  //     case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //      day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  // break;
  //     default:

  //     day = "Not exist"

  // }

  let today = new Date();

  let option = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };



  let day = today.toDateString("en-us", option);

  res.render("list",{Kindofday: day, newListitems: items});

});

app.post("/", (req, res) => {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/"); // redirect method refresh

});

app.listen(8080, () => {

  console.log("app is running at port 8080");

});
