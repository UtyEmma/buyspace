let express = require('express')
const productsController = require('../controllers/products.controller')

let router = express.Router()


router.get('/', productsController.all)
// router.get('', productsController.single)

module.exports = router