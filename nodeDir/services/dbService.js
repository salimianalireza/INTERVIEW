const userModel = require("../models/userModel")

const getBulk = async () => {
  try {
    const users = await userModel.find({})
    return { status: 'success', data: users }
  } catch (err) {
    console.log(err)
    throw err
  }
}

const createOne = async (userData) => {
  try {
    const user = await userModel.create(userData)
    return { status: 'success', data: user }
  } catch (err) {
    console.log(err)
    throw err
  }
}

module.exports = { getBulk, createOne }