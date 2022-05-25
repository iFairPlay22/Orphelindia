var express = require('express');
var router = express.Router();
var appdata = require('../services/appdata.js');
var connexion = require('../services/connexion.js');

/* POST page data. */
router.post('/admin/pages/:pageId', function(req, res, next) {
  const rt = appdata.getPageData(req.params.pageId);
  res.json(rt);
});

/* POST connection token */
router.post('/connection', function(req, res, next) {

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
router.post('/admin/edit/string', function(req, res, next) {

  if (!("token" in req.body && "stringId" in req.body && "langId" in req.body && "value" in req.body)) {
    res.json("Bad arguments...");
    return;
  }

  if (!(connexion.tryToken(req.body.token))) {
    res.json("Bad token...");
    return;
  }
  
  const rt = datappdataa.updatePageData(req.body.stringId, req.body.langId, req.body.value);
  res.json(rt);
});

module.exports = router;
