const asyncHandler = require('../utils/asyncHandler')

exports.ping = asyncHandler(async (req, res) => {
  res.json({
    ok: true,
    from: 'backend',
    at: new Date().toISOString()
  })
})

exports.echo = asyncHandler(async (req, res) => {
  const { message = '' } = req.body || {}
  res.status(201).json({
    ok: true,
    received: message,
    length: message.length,
    at: new Date().toISOString()
  })
})
