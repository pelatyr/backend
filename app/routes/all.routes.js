var shop = require('../controllers/shop');

module.exports = function(app, connect){
    app.use(async (req, res, next) => { req.con = await connect; next(); });

    app.get('/shop/showShop', shop.listShop);
}