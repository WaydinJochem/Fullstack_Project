const { express, routes } = require('./controller/controller');
const app = express();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { errorHandling } = require('./middleware/errorHandling');


// const allowedOrigins = ['http://localhost:8080', 'http://localhost:8081'];


// const corsOptions = {
//     origin: allowedOrigins
// };
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

// app.use(cors({
//     origin: function (origin, callback) {
//         if (allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     }
// }));

routes.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
});

app.listen(port, () => {
    console.log(`This server is running on http://localhost:${port}`)
});