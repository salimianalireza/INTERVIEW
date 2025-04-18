const { getBulk, createOne } = require("../services/dbService")

const getAllUsers = async (req, res) => {
  try {
    const result = await getBulk()
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', message: 'Failed to fetch users' })
  }
}

const createUser = async (req, res) => {
  try {
    const result = await createOne(req.body)
    res.status(201).json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'error', message: 'Failed to create user' })
  }
}

module.exports = { getAllUsers, createUser }