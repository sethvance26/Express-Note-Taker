const express = require("express");
const path = require("path");
const fs = require("fs");
const { title } = require("process");
//This tells node that we want to create an express server.
const app = express();
//Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;
//// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));




app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});


app.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), function (err, response) {
    const notes = JSON.parse(response);
    console.log(notes);
    res.json(notes);
  });
});

app.post("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "/db/db.json"), function (err, response) {
        const notes = JSON.parse(response);
        const noteID = notes.length + 1;
        const allNotes = req.body
        const newNote = {
            id: noteID,
            title: allNotes.title,
            text: allNotes.text,
        };
        notes.push(newNote)
        res.json(newNote)
        fs.writeFile(path.join(__dirname, "/db/db.json"), JSON.stringify(notes, null, 2), function (err) {
            
        });
  });
});




//This code starts our server ~
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
