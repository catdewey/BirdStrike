var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* GET Userlist (list of all current entries) page. */
router.get('/wildlifestrike', function(req, res) {
    var db = req.db;
    var collection = db.get('wildlife');
    collection.find({},{},function(e,docs){
        res.render('wildlifestrike', {
            "wildlifestrike" : docs
        });

    });
});

router.get('/animal', function(req, res) {
    var db = req.db;
    var collection = db.get('wildlife');
    collection.find({},{},function(e,docs){
        res.render('animal', {
            "animal" : docs
        });
    });
});
router.get('/animal', function(req, res) {
    res.render('animal', { title: 'animal' });
});

// GET Airports, gets database, sends it to jade
router.get('/airport', function(req, res) {
    var db = req.db;
    var collection = db.get('wildlife');
   // var airportsList = db.wildlife.distinct("OPERATOR");
    collection.find({},{},function(e,docs){
        res.render('airport', {
            //title: 'Airport'
            "airport" : docs
        });
    });
});
/* GET New User page. renders jade file*/
router.get('/airport', function(req, res) {
    res.render('airport', { title: 'airport' });
});


router.get('/timeday', function(req, res) {
    var db = req.db;
    var collection = db.get('wildlife');
    collection.find({},{},function(e,docs){
        res.render('timeday', {
            "timeday" : docs
        });

    });
});
/* GET New User page. */
router.get('/timeday', function(req, res) {
    res.render('timeday', { title: 'timeday' });
});

router.get('/timeyear', function(req, res) {
    var db = req.db;
    var collection = db.get('wildlife');
    collection.find({},{},function(e,docs){
        res.render('timeyear', {
            "timeyear" : docs
        });
    });

router.get('/timeyear', function(req, res) {
    res.render('timeyear', { title: 'timeyear' });
});


/* GET New User page. */
router.get('/Remarks', function(req, res) {
    res.render('Remarks', { title: 'Remarks' });
});



/* POST to Add User Service */
router.post('/addFood', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var breakFast = req.body.breakfast;
    var raTings = req.body.rating;

    // Set our collection
	console.log("Before Post");
    var collection = db.get('usercollection');
	console.log("Im post");
    // Submit to the DB
    collection.insert({
        "breakfast" : breakFast,
        "rating" : raTings
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("breakfasts");
            // And forward to success page
            res.redirect("breakfasts");
        }
    });
});

/* GET Update User page. */
router.get('/modifyBreakfasts', function(req, res) {
    res.render('modifyBreakfasts', { title: 'Add New User' });
});


/*PUT modify user, used to change ratings */
router.post('/updateFood', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var breakFast = req.body.breakfast;
    var raTings = req.body.rating;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.update(
        {breakfast : breakFast},
        {$set:{rating: raTings}
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("breakfasts");
            // And forward to success page
            res.redirect("breakfasts");
        }
    });
});




/* GET home page. */
router.get('/modifyBreakfasts', function(req, res, next) {
  res.render('modifyBreakfasts', { title: 'Express' });
});


/*REMOVE removes an entry */
router.post('/deleteFood', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var breakFast = req.body.breakfast;
    //var raTings = req.body.rating;

    // Set our collection
    var collection = db.get('usercollection');

    // Submit to the DB
    collection.remove({
        breakfast: breakFast}
	, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("breakfasts");
            // And forward to success page
            res.redirect("breakfasts");
        }
    });
});








module.exports = router;
