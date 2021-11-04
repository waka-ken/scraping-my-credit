const puppeteer = require('puppeteer')

async function getImage() {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  })
  console.log('test')
  const page = await browser.newPage()
  await page.goto('https://toribure.herokuapp.com/')
  return await page.evaluate(() => {
    return document
      .getElementsByTagName('main')[0]
      .getElementsByTagName('img')[0].src
  })
}

module.exports = {
  getImage,
}
