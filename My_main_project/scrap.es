const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://daeil.sen.hs.kr');

  const data = await page.evaluate(() => {
    const title = document.querySelector('.cm_date').textContent;
    alert(title)
    return title;
  });
  console.log('페이지 제목:', data);
  // 웹 페이지 로드 후 스크래핑 작업 수행
  await browser.close();
})();
