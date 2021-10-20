## SuperleagueGreeceApi
### The first api for the highest professional association football league in Greece.
#### All the entry is found from websites such wikipedia.org and inserted by me into the MongoDB collections.

Feel free to use it on your projects.
Build with Node.js,Express.js and MongoDB.
Deployment in heroku.
Link to docs: https://gioiliop7.github.io/GreekSuperleagueApi

### Available links to get.
```
GET https://superleaguegreeceapi.herokuapp.com/teams
GET https://superleaguegreeceapi.herokuapp.com/championships
GET https://superleaguegreeceapi.herokuapp.com/first-scorers
GET https://superleaguegreeceapi.herokuapp.com/top-scorers
GET https://superleaguegreeceapi.herokuapp.com/champions
GET https://superleaguegreeceapi.herokuapp.com/city
```

### Installation
Clone the project of master branch. Production branch is only for heroku deployment

    git clone https://github.com/gioiliop7/GreekSuperleagueApi.git

Install dependencies
```
npm install
```
Create env file with the connection url of MongoDB.
You can find it in your MongoDB Atlas.
Following an example.

```
CONNECTION_URL = mongodb+srv://{DB_USER}:<password>@cluster0.fus8z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```
Also in env file you can store port or other enviromental variables

Start the application
```
npm start
```
The app listen to
```
http://localhost:5000/
```

### Contribution
Any help or issues are welcome and i will be glad to help

### Licence:
GNU

### Resources
- https://www.npmjs.com/package/dotenv
- https://www.npmjs.com/package/express
- https://jquery.com/
- https://www.npmjs.com/package/mongodb
- https://nodejs.org/en/
- https://wikipedia.org/
- https://www.slgr.gr/el/
