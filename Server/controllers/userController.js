const { User } = require("../models");

module.exports = {
    //Get all users
    getUsers(req, res) {
        User.find()
            .select("-__v")
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    //Create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.status(200).json(user))
            .catch((err) => res.status(500).json(err));
    },

    //Update an existing user
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body })
            .select("-_v")
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with this id!" })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: "No user with that ID" })
                    : res.json({ message: "User deleted!" })
            )
            .catch((err) => res.status(500).json(err));
    },
};
