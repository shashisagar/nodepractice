const express=require('express');
const app=express();
const morgan=require('morgan');
const Joi=require('joi');
app.use(morgan());


var port = process.env.PORT || 3000;

const bodyParser=require('body-parser');

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

const person=[
    {
    firstName:"John1", lastName:"Doe1", age:40
    },
    { 
    firstName:"John2", lastName:"Doe2", age:50
    },

     {
    firstName:"John3", lastName:"Doe3", age:50
     },
     {
    firstName:"John4", lastName:"Doe4", age:70
     }
]

// app.get('/person',(req,res)=>
//     res.send(person)
// );
app.get('/person',(req,res)=>{
    //console.log("kkkkkkkkk");
    //console.log(req.query.firstname); 
     //console.log(req.body.id); 
     console.log(person.length)
     res.send(person);
});

app.post('/person',(req,res)=>{

  blogSchema = Joi.object().keys({ 
        firstname: Joi.string().required 
   }); 
  const result = Joi.validate(body, blogShema); 
  const { value, error } = result; 
  const valid = error == null; 
  if (!valid) { 
    res.status(420).json({
      message: 'Invalid request',
    }) 
  } else { 
    const id=person.length;
    const firstname=req.body.firstname;
    res.send(firstname);
  } 
})

app.put('/person/:Id',(req,res,err)=>{
    //console.log("lllllllll");
    let x=req.params.Id;
    let x1=parseInt(x);
    const obj = person.find(o => o.age === x1);
    if(!obj){
        return res.status(404).send('The person with given id, does not exists')
    }
    person.firstName=req.body.name;
    res.send(person);
    
    // if(err){
    //     res.send("Person not exists with this id");
    // }
    // else{
    //     res.send(obj);
    // }
})


app.delete('/person/:Id',(req,res,err)=>{


    
    //console.log("lllllllll");
    let x=req.params.Id;
    let x1=parseInt(x);

    var index = person.findIndex(x2 => x2.age ===x1);
    if(index==1){
        person.splice(index,1);
        res.send(person);
    }
    else{
       res.send("Person id is not exists");
    }
   
})



app.listen(port,()=>console.log('Example app listening on port' +port));