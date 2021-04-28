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

ourApp.listen(3000);
