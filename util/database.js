const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:qwer1234@cluster0.kistle6.mongodb.net/";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export {client};