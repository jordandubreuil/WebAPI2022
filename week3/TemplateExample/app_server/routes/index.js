var express = require('express')
var router = express.Router()
var ctrlLocations = require('../controllers/locations')

//use control locations to access our different pages
router.get('/', ctrlLocations.home)
router.get('/contact', ctrlLocations.contact)
router.get('/about', ctrlLocations.about)
router.get('/profile', ctrlLocations.profile)

module.exports = router