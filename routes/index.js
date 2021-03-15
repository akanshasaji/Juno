const express = require("express");
const router = express.Router();
const hospital_db = require("../models/hospitalSchema");
const education_db = require("../models/educationSchema");
const jobs_db = require("../models/jobSchema");

router.get('/', function(req, res) {
    console.log("in the main page")
  });
  
//healthcare get request
router.get("/healthcare",function(req,res){
    hospital_db.find().then(hospital=>res.json(hospital));
    console.log("in healthcare")
})
// healthcare post request
/*router.post("/healthcare",function(req,res){
    var doc = {name:req.name, address: req.address, contactinfo: req.contactinfo, timings: req.timings, vote: req.vote};
    var hospital = new hospital_db(doc);
    hospital.save(function(err,records){
        console.log("inserted")
    });
    if(req.vote!=null)
    {
        var status =updateHealthCareVote(req.id,req.vote)
        res.json({vstatus:status})
    }
})*/
//education get request
router.get("/education/",function(req,res){
    education_db.find().then(education=>res.json(education));
    console.log("in education")
})

// education post request 
/*router.post("/education",function(req,res){
    var doc = {name:req.name, address: req.address, contactinfo: req.contactinfo, timings: req.timings, vote: req.vote};
    var education = new education_db(doc);
    education.save(function(err,records){
        console.log("inserted")
    });
    if(req.vote!=null)
    {
        var status =updateEducationVote(req.id,req.vote)
        res.json({vstatus:status})
    }
})*/
//jobs get request
router.get("/jobs",function(req,res){
    jobs_db.find().then(jobs=>res.json(jobs));
    console.log("in jobs")
})

//jobs post request
/*router.post("/jobs",function(req,res){
    var doc={jobtitle: req.jobtitle, company: req.company, source: req.source, pay: req.pay, offer: req.offer, vote: req.vote};
    var job = new jobs_db(doc);
    job.save(function(err,records){
        console.log("inserted")
    });
    if(req.vote!=null)
    {
        var status =updateJobsVote(req.id,req.vote)
        res.json({vstatus:status})
    }
})*/
module.exports = router;