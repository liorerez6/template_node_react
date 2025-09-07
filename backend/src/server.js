const app = require('./app')

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`API ready on http://localhost:${PORT}`)
})
