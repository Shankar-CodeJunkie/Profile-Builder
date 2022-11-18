const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})

passport.use(new GoogleStrategy({
  clientID: process.env.sso_google_clientId,
  clientSecret: process.env.sso_google_client_secret,
  callbackURL: process.env.sso_callback_url
}, function (accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

//module.exports  = passport
