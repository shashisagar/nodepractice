const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/person',{ useNewUrlParser: true })
.then(()=>console.log('Connected to mongo db....'))
.catch((err)=> console.error('Could not connect to mongo db...',err));


