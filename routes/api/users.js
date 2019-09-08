const express = require('express');
const router = express.Router();


// route - GET api/posts/users
// @desc  Tests users route
// acess public
router.get('/test', (req, res) => res.json({msg: 'Users works'}));

module.exports = router;
