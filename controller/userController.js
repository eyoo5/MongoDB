const User = require("../models/User");

const getUsers = async (req, res, next) => {
  try {
    //query parameter

    const result = await User.find();
    res.status(200).setHeader("Content-Type", "application/json").json(result);
  } catch (error) {
    throw new Error(`Error getting all users:${error.message}`);
  }
};

const createUser = async (req, res, next) => {
  try {
    const result = await User.create(req.body);

    res.status(200).setHeader("Content-Type", "application/json").json(result);
  } catch (error) {
    throw new Error(`Error creating a user:${error.message}`);
  }
};

// const editUser = async (req, res, next)=>{
//     try {
//         const result = await User.findByIdAndUpdate
//     } catch (error) {
//         throw new Error(`Error editing a user:${error.message}`);
//     }
// }

module.exports = {
  getUsers,
  createUser,
};
