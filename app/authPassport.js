var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
    domain:       'blashadow.auth0.com',
    clientID:     '1qZh3AXhovC9FJhQvYWEFgtLIVONDsiW',
    clientSecret: 'q-SqEgIwxKKB8MtxEt932jpUOEkHJgjWK3BhaQJncyzQ2LV30aEW12W0YO8GIoq-',
    callbackURL:  '/callback'
  }, function(accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  });

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;