var express = require('express');
var appdata = require('../services/appdata.js');
var connexion = require('../services/connexion.js');

/* Create express router instance */
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Orphelindia' });
});

/* POST page data. */
router.post('/api/admin/pages/:pageId', function(req, res, next) {
  const rt = appdata.getPageData(req.params.pageId);
  res.json(rt);
});

/* POST connection token */
router.post('/api/connection', function(req, res, next) {

  if (!("pseudo" in req.body && "password" in req.body)) {
    res.json({
      valid: false,
      data: "Bad arguments..."
    });
    return;
  }

  const rt = connexion.tryLogin(req.body.pseudo, req.body.password);
  res.json(rt);
});

/* POST page data. */
router.post('/api/admin/edit/string', function(req, res, next) {
  
  if (!("token" in req.body && "stringId" in req.body && "lang" in req.body && "value" in req.body)) {
    res.json("Bad arguments...");
    return;
  }

  if (!(connexion.tryToken(req.body.token))) {
    res.json("Bad token...");
    return;
  }
  
  const rt = appdata.updatePageData(req.body.stringId, req.body.lang, req.body.value);
  res.json(rt);
});

module.exports = router;
