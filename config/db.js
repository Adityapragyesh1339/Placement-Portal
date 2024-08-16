const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('MongoURI')
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://adityapragyesh1704:QVBFML19B4lzLTes@cluster0.3izox.mongodb.net/Placement-Portal', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log("Mongo is working...")
    } catch (error) {
        console.log("Mongo in not Working...",error.message)
        process.exit(1);
    }
}

module.exports = connectDB