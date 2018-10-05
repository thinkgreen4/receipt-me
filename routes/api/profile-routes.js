const router= require('express').Router();
const passportControllers = require("../../controllers/passport");
const keysControllers = require("../../controllers/keys");

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('profile', { user: req.user });
});

module.exports = router;