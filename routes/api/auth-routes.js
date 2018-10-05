const router = require('express').Router();
const passport = require('passport');
const passportControllers = require("../../controllers/passport");
const keysControllers = require("../../controllers/keys");
// login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

//logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});
//google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.redirect('/profile');
});

module.exports = router;