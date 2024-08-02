const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
const productRoute = require('./routes/product.route')
// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/product", productRoute);
// binds and listens for connections on the specified host and port
app.listen(4000, () => { // Localhost port 3000
    console.log("Server is running on port 3000");
});




mongoose.connect('mongodb+srv://vaibhavp0509:12%40patiL@rest.rq01qwa.mongodb.net/Unsolved?retryWrites=true&w=majority&appName=rest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Connection to MongoDB failed", err);
    });
