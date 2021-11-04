const app = require('express')()
const scraping = require('./scraping')

app.get('/get_image', async (req, res) => {
  const image = await scraping.getImage()
  res.send(image)
})

module.exports = {
  path: '/api',
  handler: app,
}
