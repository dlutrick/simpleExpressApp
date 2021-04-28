let express = require("express");
let ourApp = express();

ourApp.use(express.urlencoded({ extended: false }));

ourApp.get("/", function (req, res) {
  res.send(`
    <form action="/answer" method="POST">
        <p>What is your favorite animal?</p>
        <input name="favoriteAnimal" autocomplete="off">
        <button>Submit</button>
    </form>
    `);
});

ourApp.post("/answer", function (req, res) {
  if (req.body.favoriteAnimal.length > 0) {
    res.send(`
    <p>${req.body.favoriteAnimal}'s are freaking awesome!</p>
    <a href="/">Click to go back.</a>
    `);
  } else {
    res.send(`
      <p>You didn't enter anything! Try again!</p>
      <a href="/">Click to go back.</a>
      `);
  }
});

ourApp.get("/answer", function (req, res) {
  res.send(`
  <p>Looking for something? There is nothing to see here.</p>
  <a href="/">Click to go back.</a>
  `);
});

ourApp.listen(3000);
