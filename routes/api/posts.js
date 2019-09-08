const express = require('express');
const router = express.Router();

// route - GET api/posts/tests
// @desc  Tests posts route
// acess public 
router.get('/test', (req, res) => res.json({msg: 'Posts works'}));

module.exports = router;
