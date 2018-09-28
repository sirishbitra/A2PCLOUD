var express = require('express');
var parser = require('ua-parser-js');
var router = express.Router();
var db = require('./../models');
var ShortUrls = db.ShortUrls;
var Tracker = db.Tracker;
var MetaData = db.MetaData;
var Codes = db.Codes;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', { title: 'Redirection App Home Page' });
});

/* GET home page. */
router.get('/:trackid', function(req, res, next) {
  var ua = parser(req.headers['user-agent']);
  var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
  /* 
  { ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36',
  browser: { name: 'Chrome', version: '64.0.3282.186', major: '64' },
  engine: { name: 'WebKit', version: '537.36' },
  os: { name: 'Mac OS', version: '10.11.6' },
  device: { vendor: undefined, model: undefined, type: undefined },
  cpu: { architecture: undefined } }
  */
  ShortUrls.findOne({ include: [{model: Codes, required: true, where: {shortCode: req.params.trackid}}]})
    .then(function (results) {
      console.log(results.campaignId)
      if(results){
        Tracker.create({
          campaignId: results.campaignId,
          shortCode: req.params.trackid,
          ip: ip,
          browser: ua.browser.name || '',
          browserVersion: ua.browser.major || '',
          os: ua.os.name || '',
          osVersion: ua.os.version || '',
          engine: ua.engine.name || '',
          engineVersion: ua.engine.version || '',
          deviceVendor: ua.device.vendor || '',
          deviceModel: ua.device.model || '',
          deviceType: ua.device.type || '',
          createdAt: new Date(),
        }).then(function(data) {
            console.log("tracker inserted for "+ req.params.trackid)
        }).catch(function(error) {
            console.log("tracker failed to inserted for "+ req.params.trackid + " ", error)
            // res.json({error:error, stackError:error.stack});
        });
        MetaData.findAll({ where: {levelId: results.campaignId, level: "campaign"}}).then(function(meta){
          console.log("metadata", meta);
          res.render('tracker/layout', { title: 'redirect', url: results.campaignUrl, metaData: meta});
        }).catch(function(error){
          console.log("metadata-error", error);
          res.render('tracker/layout', { title: 'redirect', url: results.campaignUrl, metaData: []});
        });
      }else{
        res.render('error', { error:{stack: "Error: No Page Found."}});  
      }
    }).catch(function(error){
      res.render('error', { error:{stack: "Error: No Page Found."}});
    });
});

/* GET home page. */
router.get('/:trackid/tracker', function(req, res, next) {
  console.log(req.params)
  res.render('tracker_admin/login', { title: 'redirect tracker' });
});

module.exports = router;
