var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/miniproject';
const connectdb=()=>{


//setting up default mongoose connection

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB') 
})
}
module.exports=connectdb