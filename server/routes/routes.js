//import the required modules
var express = require('express');
var router = express.Router();
var userController = require('../controller/UserController');


//api for posting the data of employee
router.route('/user')
    .post(userController.postUser);

    router.route('/product')             
    .post(userController.postProduct);
  

//api for getting the all employees from the db
// router.route('/v1/getAllEmployee')
//     .get(employeeController.getAllEmployee);

// //api for getting the employee data from his id
// router.route('/v1/getEmployee/:id')
//     .get(employeeController.getEmployee);


// //api for searching employee name
// router.route('/v1/search/:name')
//     .get(employeeController.searchEmployee);

// //api for updating the data of the employee
// router.route('/v1/update/:employeeId')
//     .put(employeeController.updateEmployee);

// //api for deleting the employee
//     router.route('/v1/delete')
//         .delete(employeeController.deleteEmployee);

// //export the router
 module.exports = router;