var express = require('express'),
    router = express.Router(),
    tracking = require('../app/tracking'),
    //sc = require('../app/sc'),
    ci = require('../app/ci'),
    nconf = require('nconf');

(function(){
  "use strict";

  nconf.file({ file: 'config/prestige.json' });
  var tracking_config = nconf.get('prestidigitation:tracking');
  var sc_config = nconf.get('prestidigitation:sc');
  var ci_config = nconf.get('prestidigitation:ci');

  //handle requests from source control
  router.post('/sc/tracking/:project/:key', function(req, res) {
    var project = req.params.project;
    var key = req.params.key;
    var postCommit = req.body;

    tracking.updateIssue(tracking_config, project, postCommit, key, function(res, err) {
      if (!err) {
        console.log(res);
      } else {
        console.log(err);
      }
    });

    res.writeHead(200);
    res.end("Got it!");
  });

  router.post('/sc/ci/:project/:key/:user', function(req, res) {
    var project = req.params.project;
    var key = req.params.key;
    var postCommit = req.body;

    res.writeHead(200);
    res.end("Got it!");
  });

  //handle requests from issue tracking
  router.post('/tracking/:project/:key', function(req, res) {

  });

  //handle request from continuous integration
  router.post('/ci/:project/:key', function(req,res) {

  });

  module.exports = router;

})();
