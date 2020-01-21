var express=require('express')
var router=express.Router();
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/Edudb';
mongoose.connect(mongoDB, { useNewUrlParser: true },function(err){
    if(!err){
        console.log("connection to db established")
    }
});
var user=require('../model/usermodel');
var ismail=

router.get("/signup",function(req,res){

   ismobile_exist:Boolean=false;
   isemailexist:Boolean=false;

   user.find({email:"jhjkhjh"},function(err,res){
       if(res.length!=0){
           isemailexist=true;

       }
   })
   user.find({mobile:76587585675},function(err,res){
    if(res.length!=0){
        isemailexist=true;

    }
})
if(isemailexist){
    res.send({emailexists:"true"})
}
if(ismobile_exist){
    res.send({mobileexists:"true"})
}
else {
   var  newuser= new user();
    newuser.name="meera";
    newuser.dob="12/12/2019";
    newuser.college_id="CSC785";
    newuser.email="jhjhgg@gmail.com";
    newuser.mobile=1234567898;
    newuser.place="Thrissur";
    newuser.username="65656";
    newuser.password="admin@123"


newuser.save(function(err){
    if(err) res.send({msg:"error  :"+err});
    else{
        console.log("data inserted");
        res.send({"msg":"data inserted"});
    }
});
}



    

})

function  isEmailExists(email){
    return true;

}


module.exports=router;