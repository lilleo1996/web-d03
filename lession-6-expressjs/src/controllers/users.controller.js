const users = [
  {
    id: '1',
    name: 'Hieu',
  },
  {
    id: '69',
    name: 'Quang',
  },
  {
    id: '1000',
    name: 'Khai',
  },
  {
    id: '4',
    name: 'Tien',
  }
]

module.exports.getUsers = (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: 'success',
    users
  })
}

module.exports.getUserById = (req, res) => {
  const { id } = req.params
  const user = users.find(user => user.id === id)

  if(!!!user) {
    return res.status(400).json({
      isSuccess: false,
      message: 'not found the id user',
    })
  }

  res.status(200).json({
    isSuccess: true,
    message: 'success',
    user
  })
}

module.exports.createUser = (req, res) => {
  console.log("req.body", req.body)
  const { name } = req.body

  if(!name) {
    return res.status(400).json({
      isSuccess: false,
      message: 'invalid name',
    })
  }

  users.push({id: `${users.length + 1}`, name})
  
  res.status(200).json({
    isSuccess: true,
    message: 'success',
    users
  })
}