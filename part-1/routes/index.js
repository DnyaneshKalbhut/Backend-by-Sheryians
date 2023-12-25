var express = require('express');
var router = express.Router();

const userModel = require("./users")

/* GET home page. */
router.get('/', function(req, res) {
  res.render("index");
});

router.get('/create', async (req,res)=>{
 const createdUSer= await userModel.create({   // it is asynchronous model
    username:"Dnyanesh01",
    age:21,
    name:"Dnyanesh kalbhut"
  })
  res.send(createdUSer)
})

router.get("/allusers",async(req,res)=>{
let allusers= await userModel.find();
res.send(allusers)
})


router.get("/delete",async(req,res)=>{
  let deletedUser= await userModel.findOneAndDelete( {username :"Dnyanesh"});
  res.send(allusers)
  })
  
module.exports = router;
