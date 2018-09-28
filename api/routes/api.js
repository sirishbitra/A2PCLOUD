var express = require('express');
var router = express.Router();

var _ = require("lodash");
var bodyParser = require("body-parser");
var jwt = require('jsonwebtoken');

var passport = require("passport");
var passportJWT = require("passport-jwt");

var db = require('./../../models');
var UserModel = db.User;


var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var user = require('./user');

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  return res.json({user: req.user});
});

/* GET api listing. */
router.get('/auth/', function(req, res, next) {
  res.send('use /api/auth/login to login');
});


//router.get('/auth', auth);
/* POST login. */
router.post('/auth/login', function (req, res, next) {
  passport.authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
          return res.status(400).json({
              message: info ? info.message : 'Login failed',
              user   : user
          });
      }
      req.login(user, {session: false}, (err) => { 
          if (err) {
              res.send(err);
          }
          //create a user token session id, with expiry time
          const token = jwt.sign({userId: user.userId, accountId: user.accountId, userEmail: user.userEmail}, "your_jwt_secret");
          return res.json({user: user.userEmail, token: token});
      });
  })(req, res);
});

module.exports = router;
