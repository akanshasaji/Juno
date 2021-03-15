const { models } = require("mongoose");
const hospital_db = require("../models/hospitalSchema");
const education_db = require("../models/educationSchema");
const jobs_db = require("../models/jobSchema");
module.exports.updateHealthCareVote = async(id,vote)=>{
    var status =""
    hospital_db.findByIdAndUpdate(id,{$inc: {vote:vote, count:1}},function(err,records){
        if(records.vote>(0.6*records.count))
        {
            status="verified"
        }
        else
        {
            status ="unverified"
        }
    })
    return status;
};
module.exports.updateEducationVote = async(id,vote)=>{
    var status =""
    education_db.findByIdAndUpdate(id,{$inc: {vote:vote, count:1}},function(err,records){
        if(records.vote>(0.6*records.count))
        {
            status="verified"
        }
        else
        {
            status ="unverified"
        }
    })
    return status;
 };
 module.exports.updateJobsVote = async(id,vote)=>{
    var status =""
    jobs_db.findByIdAndUpdate(id,{$inc: {vote:vote, count:1}},function(err,records){
        if(records.vote>(0.6*records.count))
        {
            status="verified"
        }
        else
        {
            status ="unverified"
        }
    })
    return status;
 };