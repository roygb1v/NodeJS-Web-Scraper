const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

// const URL = "https://www.reddit.com/r/news/";
const URL = "https://www.jobstreet.com.sg/en/job-search/job-vacancy.php?ojs=10&key=software+engineer"

puppeteer.launch().then(browser => browser.newPage()).then(page => {
  return page.goto(URL).then(() => {
    return page.content();
  });
}).then(html => {
  const $ = cheerio.load(html);
  const news = []
  $('.position-title-link').each(function (i, elm) {
    news.push({title: $(elm).text()});
  });
  console.log(news);
}).catch(e => {
  console.log(e);
});


// const news = dom.querySelectorAll('div > h3').map(node => node.textContent);
// console.log(stuff('div > h3').text());
// $('div').find('h3').each((stuff) => {
//   console.log(stuff)
// })