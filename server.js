const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Books = require('./models/books.js');

const app = express();

/////////////////////////////////////////////////////////////////

app.use(express.json());
app.use(cors());

/////////////////////////////////////////////////////////////////

///USING PORT 3000
let PORT = 3000;
if (process.env.PORT) {
    PORT = process.env.PORT
}

////===========ROUTES===========////

///CREATE/POST ROUTE///ADD BOOK///
app.post('/books', (req, res) => {
    Books.create(req.body, (err, createdBook) => {
        res.json(createdBook);
    });
});


///GET/READ ROUTE////GET ALL BOOKS///
app.get('/books', (req, res) => {
    Books.find({}, (err, foundBooks) => {
        res.json(foundBooks);
    });
});


///DELETE ROUTE///DELETE BOOKS///
app.delete('/books/:id', (req, res) => {
    Books.findByIdAndRemove(req.params.id, (err, deletedBooks) => {
        res.json(deletedBooks);
    });
});


///UPDATE/EDIT ROUTE///EDIT BOOKS///
app.put('/books/:id', (req, res) => {
    Books.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBooks) => {
        res.json(updatedBooks);
    });
});


////////MAIN ROUTE
app.listen(PORT, () => {
    console.log('listening...');
});

////////////////////////////////////////////////////////////////

//////////////MONGOOSE CONNECTION
mongoose.connect('mongodb+srv://evrouge:CgmgSg70vGRMtIqw@cluster0.ehndsmy.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
});

/////////////////////////////////////////////////////////////////