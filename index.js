const dotenv = require('dotenv');
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

app.get("/championships/:id", (request, response) => {
    championships.findOne({ "_id": new ObjectId(request.params.id) }, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/championships", (request, response) => {
    championships.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});

app.get("/championships-olympiacos", (request, response) => {
    championships.find({"team":"Olympiacos"}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


app.listen(5000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        championships = database.collection("championships");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});