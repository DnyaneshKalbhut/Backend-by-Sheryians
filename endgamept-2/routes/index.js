var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, ) {
  res.render('index');
});

router.get('/failed',(req,res)=>{
req.flash("age",12)
req.flash("name","Dnyanesh")
res.send("bangaya")
})

router.get('/checkkaro',(req,res)=>{
  console.log(req.flash("age"),req.flash("name"));
res.send("check in the terminal")
})
module.exports = router;
