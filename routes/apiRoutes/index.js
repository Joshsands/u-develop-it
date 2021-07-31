const express = require('express');

//Use the express.Router class to create modular, mountable route handlers.
//A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

module.exports = router;