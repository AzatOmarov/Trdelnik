const express = require('express');
const router = express.Router();

// route - GET api/posts/profile
// @desc  Tests profile route
// acess public
router.get('/test', (req, res) => res.json({msg: 'Profile works'}));

module.exports = router;
