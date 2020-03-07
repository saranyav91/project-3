const router = require('express').Router();
let User = require('../../models/usermodel');
const userController = require("../../controllers/userController");

console.log("in routes");
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(400).json('Error: ' + err));
});
//router.route('/').post(userController.create);
module.exports = router;