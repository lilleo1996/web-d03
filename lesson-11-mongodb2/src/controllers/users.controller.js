const User = require('../models/user.model')

module.exports.getUsers = async (req, res) => {
  const users = await User.find()
  
  res.status(200).json({
    isSuccess: true,
    message: 'successfully received users',
    users
  })
}

module.exports.getUserById = async (req, res) => {
  const { id } = req.params

  const user = await User.findById(id)

  if (user) {
    return res.status(200).json({
      isSuccess: true,
      message: 'successfully received user by id',
      user
    })
  }

  res.status(400).json({
    isSuccess: false,
    message: 'not found the id user',
  })
}

module.exports.createUser = (req, res) => {
  const { email, password, firstName, lastName, birthday } = req.body

  if (!email || !password || !firstName || !lastName || !birthday) {
    return res.status(400).json({
      isSuccess: false,
      message: 'missing required fields',
    })
  }

  const newUser = new User({ ...req.body })  // creare new document from model

  newUser.save(function(err, doc) {
    if (err) {
      return res.status(500).json({
        isSuccess: false,
        message: "database error"
      })
    } else {
      res.status(200).json({
        isSuccess: true,
        message: "user is successfully created",
        newUser: doc
      })
    }
  })
}

module.exports.updateUser = (req,res) => {
  const { id } = req.params

  User.findByIdAndUpdate(id, req.body, function(err, doc) {
    if (err) {
      return res.status(500).json({
        isSuccess: false,
        message: 'user update failure with id'
      })
    }

    res.status(200).json({
      isSuccess: true,
      message: 'user is successfully updated',
      updatedUser: {...doc._doc, ...req.body}
    })
  })
}

module.exports.deleteUser = (req,res)=>{
  // const {id} = req.params

  // if (!id) {
  //   return res.status(400).json({
  //     isSuccess: false,
  //     message : 'not found user'
  //   })
  // }

  // users = users.filter((user)=>user.id !== id)
  
  // res.status(200).json({
  //   isSuccess :true,
  //   message : `the id ${id} was deleted from the database`,
  //   users
  // })
}

