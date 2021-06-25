const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect('mongodb+srv://ahmet:Ahmet1977@cluster0.bgjos.mongodb.net/movieapp-api', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    
    mongoose.connection.on("open", ()=> {console.log('MongoDB connection is successful..')})
    mongoose.connection.on('error', ()=>{console.log('MongoDB connection was failed...')})


}