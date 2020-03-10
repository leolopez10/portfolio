//=================================================================
//Lets do it
//=================================================================
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Check to see if backend is talking with the frontend
app.get("/api/hello", function (req, res) {
    res.send("SUCCESS======================================Backend is talking to the Frontend")
})
//==========================================
//Blog Routes
//==========================================
app.get("/api/blog", function (req, res) {
    db.Blog
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

app.post("/api/blog", function (req, res) {
    db.Blog
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

app.get("/api/blog/:id", function (req, res) {
    db.Blog
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

app.put("/api/blog/:id", function (req, res) {
    db.Blog
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

app.delete("/api/blog/:id", function (req, res) {
    db.Blog
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})

// Add routes, both API and view
// app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolioDB")
    .then(() => console.log("Database is connected"))
    .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
