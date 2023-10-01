import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const recipeJSON =
  [
      {
        "id": "1",
        "name": "Front-End",
        "description": "It includes HTML, CSS, React.js etc."
      },
      {
        "id": "2",
        "name": "Back-End",
        "description": "It includes node.js, express.js"
      },
      {
        "id": "3",
        "name": "Full Stack",
        "description": "It includes both Front-end and Back-end"
      } 
  ];

const JSONstring = JSON.stringify(recipeJSON);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;

app.get("/", (req, res) => {
  res.render("index.ejs", { development: data });
});

app.post("/development", (req, res) => {
  switch (req.body.choice) {
    case "front":
      data = JSON.parse(JSONstring)[0];
      break;
    case "back":
      data = JSON.parse(JSONstring)[1];
      break;
    case "full":
      data = JSON.parse(JSONstring)[2];
      break;
    default:
      break;
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
