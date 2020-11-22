const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const catchAsync = require('../utils/catchAsync');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage }); //esto es para nube
//const upload = multer({ dest: 'uploads/' }); //esto es para local

const Campground = require('../models/campground');

router.route('/')
    .get(catchAsync(campgrounds.index))
    //.post(isLoggedIn, validateCampground, catchAsync(campgrounds.createCampground)) //lo lo desabilito para guardar en local, dsp en host si va a ir
    .post(upload.array('image'), (req, res) => {  //el new.ejs tiene q tener en las imagenes el name="image"
        console.log(req.body, req.file);//esto es para saber q manda y como y saber como manipular nombres, fechas y cosas asi
        res.send("IT WORKED?");
    })

router.get('/new', isLoggedIn, campgrounds.renderNewForm)

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, validateCampground, catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm))



module.exports = router;