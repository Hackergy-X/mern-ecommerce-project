require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');


connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);

        console.log("Data Import Successfully");

        process.exit();
    } catch (error) {
        console.log("Error with Data Import");
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

importData();
