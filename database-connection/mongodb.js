const {MongoClient} = require("mongodb");
const connectionString = 'mongodb+srv://dbMongoUser:Password123@cluster0.mk6ie.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db("ProfileBuilder");

      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },

  insertDocument: async function (userObject) {
    let isUserExist = await this.getDocument(userObject.id);
    console.log('hey is', userObject.id)
    if (!isUserExist) {
      return await this.getDb().collection('users').insertOne({_id: userObject.id, socialData: userObject})
    } else {
      console.log('skipping user');
      let userDoc = await this.getDb().collection('users').findOne({_id: userObject.id});
      return userDoc;
    }
  },

  updateDocument: async function (userObject) {
    await this.getDb().collection('users').replaceOne(
        {
          _id: userObject.user.user.id
        },
        {
          _id: userObject.user.user.id,
          awards: userObject.awards,
          experiences: userObject.experiences,
          contact: userObject.contactDetails,
          skills: userObject.skills,
          summary: userObject.summary
        }),
        {upsert: true}
  },

  getDocument: async function (id) {
    let docs = await this.getDb().collection('users').findOne({_id: id});
    return docs != null;
  }

};



