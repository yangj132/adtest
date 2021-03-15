const config = require('../config/adConfig');
const activeDirectory = require('activedirectory');
const ad = new activeDirectory(config);
console.log(ad)
exports.getUserDetails = async(req,res,next)=>{
    var query;
    let name = req.params.name;
    let text = name.split("=");
    if(text[0].toString().toLowerCase() === "uid"){
      query = 'uid=' + text[1];
    }
    // if(text[0].toString().toLowerCase() === "fname"){
    //     query = 'giveName' + text[1].toString().trim();

    // }
    // else if(text[0].toString().toLowerCase() === "lname"){
    //     query = 'sn=' + text[1].toString().trim();
    // }
    // else{
    //     query = 'mail=' + text[1].toString.trim();

    // }
    ad.findUsers(query,true,function(err,users){
        console.log(query)
        if(err){
            res.status(404).send({"msg":`user not found by ${query}`})
            return;
        }
        if((!users)||(users.length == 0)){
            noUsers = [{"displayName":"Entry Not Found, Please"}]
            res.status(200).send(noUsers)
        }
        else{
            res.status(200).send(users)
        }
    })
}



exports.authenticate = async(req,res,next)=>{
    const username = 'john.smith@domain.com';
    const password = 'password';
    ad.authenticate(username, password, function(err, auth) {
        if (err) {
          console.log('ERROR: '+JSON.stringify(err));
          return;
        }
        
        if (auth) {
          console.log('Authenticated!');
        }
        else {
          console.log('Authentication failed!');
        }
    });
}