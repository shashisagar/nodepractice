const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/playground')
.then(()=>console.log('connected to mongodb'))
.catch(err =>console.error('error while connecting...',err));

var Schema=mongoose.Schema;
var blogSchema=new Schema({
      title:String,
      author:String,
      body:String,
      comments:[{body:String,date:Date}],
      date:{type:Date,default:Date.now},
      hidden:Boolean,
      meta:{
          votes:Number, favs:Number
      }
});
var Blog = mongoose.model('Blog', blogSchema);
async function createDocumentCall(){
var createDocument=new Blog({
      title:'test',
      author:'test',
      body:'test',
});
var result=await createDocument.save();
console.log(result);
}
createDocumentCall();



