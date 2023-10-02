const workerController = require("../controllers/worker");
const express = require("express");
const router= express.Router();

// http://localhost:3100/api/v1/users/new-users
router.post('/new-worker', workerController.createUser);
// http://localhost:3100/api/v1/users
router.get('/', workerController.getAllUsers);
// http://localhost:3100/api/v1/users?id=****
router.get('/:id', workerController.getUserById);
// http://localhost:3100/api/v1/users?id=****
router.patch('/:id', workerController.updateUserById);
// http://localhost:3100/api/v1/users?id=****
router.put('/:id', workerController.updateUserById);
// http://localhost:3100/api/v1/users?id=****
router.delete('/:id', workerController.deleteUserById);


module.exports= router;