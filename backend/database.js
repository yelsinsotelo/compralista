const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/compralistdb',{
    useCreateIndex : true,
    useNewUrlParser : true,
    useFindAndModify : false,
    useUnifiedTopology: true
})
.then(db => console.log('conexión correcta'))
.catch(err => console.log(err))