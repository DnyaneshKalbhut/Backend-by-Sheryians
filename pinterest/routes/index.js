var express = require('express');
const passport = require('passport');
var router = express.Router();
const userModel = require('./users');
const postModel = require('./post');
const localStrategy = require("passport-local"); // Add .Strategy here

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render("login",{ error : req.flash("error")});
});

router.get('/feed' , (req,res,next)=>{
 res.render('feed')
})
router.get('/profile', isLoggedIn, async function(req, res, next) {
 const user = await userModel.findOne({
  username: req.session.passport.user
 })
  res.render("profile",{user:user});
});



router.post("/register", (req, res) => {
  const userData = new userModel({
    username: req.body.username,
    email: req.body.email,
    fullname: req.body.fullname,
  });

  userModel.register(userData, req.body.password)
    .then(() => {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/profile");
      });
    })
    .catch(err => {
      console.error(err);
      res.render('register',{error:err.message}); // Adjust the view name accordingly
    });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login", // Corrected the failureRedirect route
  failureFlash:true
}),function (req,res) {
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

router.get("/logout", (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
