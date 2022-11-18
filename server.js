require('dotenv').config();
const {createServer} = require('http');
const {parse} = require('url')
const next = require('next');
const express = require('express');
//const env = require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3001
const app = next({dev, hostname, port})
const handle = app.getRequestHandler()
const bodyParser = require('body-parser');
const basePath = '/';
const googleStrategy = require('passport-google-oauth20').Strategy
const session = require('express-session');
const passport = require('passport')
const dbo = require('./database-connection/mongodb');

console.log('env', process.env.name)


//const googleStrategy = google.Strategy;


/*app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname, query } = parsedUrl
      console.log(pathname)
      console.log('query', query)

      if (pathname === '/profile') {
        console.log('coming here')
        await app.render(req, res, '/profile', query)
      } else if (pathname === '/home') {
        await app.render(req, res, '/home', query)
      } else {
        await handle(req, res, parsedUrl)
      }

    } catch (e) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, (err) => {
    if (err) {
      console.log(err)
      throw err;
    }
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})*/


app.prepare().then(async() => {
  const server = express();
  let router = express.Router()
  //server.use(bodyParser.urlencoded({extended: false}));
  server.use(express.json());
  server.disable('x-powered-by');
  let databaseConnection = await dbo.connectToServer();
  let profileDB = dbo.getDb();

  server.use(
      session({
        secret:'shankar',
        name: 'profile-builder',
        resave: true,
        saveUninitialized: true,
        cookie: {secure: false, sameSite: 'Lax'}
      })
  )

  server.use(passport.initialize());
  server.use(passport.session());
  require('./sso/passport.cjs')


  /** The rewire middleware - show _next files  **/
  server.use(function (req, res, next) {
    if (req.originalUrl.indexOf(basePath + '/_next') > -1) {
      req.url = req.originalUrl.replace(basePath + '/_next', '/_next');
    }
    next();
  });
  /** Serve _next dynamic js and css by next **/
  server.get('/_next/*', (req, res) => {
    /* serving _next static content using next.js handler */
    handle(req, res);
  });


  server.get('/profile', isAuthenticated, async (req, res) => {
    const parsedUrl = parse(req.url, true)
    const {pathname, query} = parsedUrl
    let query1 = {ts: '1666782889919'}
    await app.render(req, res, '/profile', query1)
  })


  server.get('/login', async(req, res) => {
    const parsedUrl = parse(req.url, true)
    const {pathname, query} = parsedUrl
    console.log(`parsedurl ${JSON.stringify(parsedUrl)}`)
    console.log('query', query)
    let query1 = {ts: '1666782889919'}
    await app.render(req, res, '/login', query1)
  })

  server.get('/login/federated/google',
    passport.authenticate('google',
        {
          scope: ['profile', 'email']
    }));


  server.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/login'}),
      async function(req, res){
      let userDoc = await dbo.insertDocument(req.session.passport.user);
      req.user.profile = userDoc;
      res.redirect('/profile')
  });
  
  server.post('/saveprofile', isAuthenticated, async function (req, res) {
    console.log('few things', req.body.data)
    await dbo.updateDocument(req.body.data)
  });

  server.post('/readprofile', isAuthenticated, async function (req, res) {
    console.log('coming to read profile' , req.body.data._id);
    res.setHeader('Content-Type', 'application/json')
    return res.json({data: true})
    //return true;
   // let userDoc = await dbo.getDocument({id: req.body.data._id})
    //console.log('userDoc', userDoc)
  });


  router.get('/', async(req, res) => {
    const parsedUrl = parse(req.url, true)
    const {pathname, query} = parsedUrl
    let query1 = {ts: '1666782889919'}
    await app.render(req, res, '/', query1);
  });

  server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
    .catch((ex) => {
      console.log('hey ')
      console.error(ex.stack);
      process.exit(1);
    });


const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
}
