const { express, routes } = require('./controller/controller');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { errorHandling } = require('./middleware/errorHandling');
const port = +process.env.PORT || 2303;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
})

app.use(express.static('./static'));

app.use(
    express.urlencoded({
        extended: false
    }),
    cookieParser(),
    cors(),
    errorHandling,
    routes
);

routes.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
});

app.listen(port, () => {
    console.log(`This server is running on http://localhost:${port}`)
});