const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://hello:wdaf12345678@ds227570.mlab.com:27570/portfolio-db');
/* GET api listing. */
 
router.get('/', (req, res) => {
  res.send('api works');
});
 
var col_menuItems = db.collection('menuItems');
// Get Todos
router.get('/menuItems', function(req, res, next){
    db.menuItems.find(function(err, menuItems){
        if(err){
           res.send(err);
        } else {
           res.json(menuItems);
        }
    });
});

var col_menuItems = db.collection('masterInfo');
// Get Todos
router.get('/masterInfo', function(req, res, next){
    db.masterInfo.findOne(function(err, masterInfo){
        if(err){
           res.send(err);
        } else {
           res.json(masterInfo);
        }
    });
});

var col_menuItems = db.collection('aboutMe');
// Get Todos
router.get('/aboutMe', function(req, res, next){
    db.aboutMe.findOne(function(err, aboutMe){
        if(err){
           res.send(err);
        } else {
           res.json(aboutMe);
        }
    });
});

var col_menuItems = db.collection('mycontact');
// Get Todos
router.get('/aboutMe', function(req, res, next){
    db.mycontact.findOne(function(err, mycontact){
        if(err){
           res.send(err);
        } else {
           res.json(aboutMe);
        }
    });
});

var col_menuItems = db.collection('graduate');
// Get Todos
router.get('/graduate', function(req, res, next){
    db.graduate.find(function(err, graduate){
        if(err){
           res.send(err);
        } else {
           res.json(graduate);
        }
    });
});

var col_menuItems = db.collection('projects');
// Get Todos
router.get('/projects', function(req, res, next){
    db.projects.find(function(err, projects){
        if(err){
           res.send(err);
        } else {
           res.json(projects);
        }
    });
});


var col_menuItems = db.collection('skill');
// Get Todos
router.get('/skill', function(req, res, next){
    db.skill.find(function(err, skill){
        if(err){
           res.send(err);
        } else {
           res.json(skill);
        }
    });
});
 
module.exports = router;	