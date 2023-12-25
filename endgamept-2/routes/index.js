var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, ) {
  res.render('index');
});

const userModel = require('./users')

router.get('/creates',async (req,res)=>{
  // let userdata =await userModel.create({
  //   username:"Janavhi",
  //   nickname:"Pingu",
  //   description:"i am a Doctor",
  //   categories:["food",'fashion','','react'],
  // })

  // res.send(userdata);
})

router.get('/find', async (req,res)=>{
  let regax = new RegExp("^Dnyanesh$","i");//it will check insensitively the username
  let user = await userModel.find({username:regax});
  res.send(user)
})

// router.get('/failed',(req,res)=>{
// req.flash("age",12)
// req.flash("name","Dnyanesh")
// res.send("bangaya")
// })

// router.get('/checkkaro',(req,res)=>{
//   console.log(req.flash("age"),req.flash("name"));
// res.send("check in the terminal")
// })
module.exports = router;
