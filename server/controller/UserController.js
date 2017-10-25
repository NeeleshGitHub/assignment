//Import required module
var User = require('../model/user');


// export the postUser method
exports.postUser = function(req, res){
  // creating the new employee
  var usr = new User({
    name:         req.body.name,
    password:     req.body.password,
    emailId:      req.body.email,
    mobileNumber: req.body.mobile,
    
  });

  //save the creating employee
  usr.save(function(error,response){
    // handle the error
      if(error){
        return error;
      }
      else{
        //send the response to the browser
        res.json({
          success: true,
          body: response
        });
      }
  }); // end of save method
} 

