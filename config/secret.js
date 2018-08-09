module.exports = {

  database: 'mongodb://peter:nairobi1@ds149511.mlab.com:49511/somasoma',
  port: 3000,
  secretKey: 'chilli12345678',
  facebook: {
    clientID: '295175894566817',
    clientSecret: 'c485eec827d23415180405efc48e6c78',
    profileFields: ['emails', 'displayName'],
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    passReqToCallback: true,
  }

};
