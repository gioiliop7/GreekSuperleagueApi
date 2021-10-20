const dotenv = require("dotenv");
dotenv.config();
const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL = process.env.CONNECTION_URL;
const DATABASE_NAME = "superleaguedb";

var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
var database, championships;

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', false);

  // Pass to next layer of middleware
  next();
});

app.get('/', function (req, res) {
  res.send(console.log('SuperleagueGreeceApi by Giorgos Iliopoulos'))
})

// app.get("/championships/:id", (request, response) => {
//   championships.findOne(
//     { _id: new ObjectId(request.params.id) },
//     (error, result) => {
//       if (error) {
//         return response.status(500).send(error);
//       }
//       response.send(result);
//     }
//   );
// });

app.get("/championships", (request, response) => {
  championships.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/first-scorers", (request, response) => {
  first_scorers.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/top-scorers", (request, response) => {
  top_scorers.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/champions", (request, response) => {
  champions.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/city", (request, response) => {
  city.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

app.get("/teams", (request, response) => {
  teams.find({}).toArray((error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    response.send(result);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      championships = database.collection("championships");
      first_scorers = database.collection("first-scorers");
      top_scorers = database.collection("top-scorers");
      champions = database.collection("champions");
      teams = database.collection("teams");
      city = database.collection("city");
      console.log("Connected to `" + DATABASE_NAME + "`!");


      // Get today date for last_updated item in api.

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      today = dd + "/" + mm + "/" + yyyy;

    // Create a json and insert it into mongo db

      const newItem = [
      ];

      // newItem.forEach(e => {

      //   championships
      //     .insertOne(e)
      //     .then((result) =>
      //       console.log(`Successfully inserted item with _id: ${result.insertedId}`)
      //     )
      //     .catch((err) => console.error(`Failed to insert item: ${err}`));

      // });
    }
  );
});
