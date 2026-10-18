const mongoose = require('mongoose');
const connectDB = () =>{
mongoose.
connect(process.env.MONGODB_LINK)
.then(() => console.log('mongodb connect'))
.catch((error) =>{console.log('faild connect',error)});
}
module.exports = connectDB;