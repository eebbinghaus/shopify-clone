const router = require("express").Router();
const {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").put(updateUser).delete(deleteUser);

module.exports = router;
