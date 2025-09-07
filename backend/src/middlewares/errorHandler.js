// Error handler גלובלי
module.exports = (err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'Internal Server Error'
  res.status(status).json({ ok: false, error: message })
}
