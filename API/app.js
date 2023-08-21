const {express, routes} = require('./controller/productController');
const app = express();
const path = require('path');
const port = +process.env.PORT || 2303

app.use(express.static('./static'));
app.use(
    express.urlencoded({
        extended: false
    }),
    routes
)
routes.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './static/html/index.html'))
});

app.listen(port, () => {
    console.log(`This server is running on http://localhost:${port}`)
});