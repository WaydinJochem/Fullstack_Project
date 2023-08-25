const Products = require('./products');
const Users = require('./users');
// Export all objects
module.exports = {
    products: new Products(),
    users: new Users(),
}