const puppeteer = require('puppeteer');
const website = process.env.WEBSITE || 'https://slides.kubernetesmastery.com/';
const argv = require('yargs')
  .usage('Turns slides from Kubernetes Mastery into pngs and saves them to /i in container')
  .example('docker run -v $(pwd):/i bretfisher/s2i [starting-slide] [ending-slide]')
  .demandCommand(2)
  .argv;

console.log('starting save of slides ' + argv._[0] + ' through ' + argv._[1]);
(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();

  await page.setViewport({
	  width: 1920,
	  height: 1080,
	  deviceScaleFactor: 1,
  });

  for (let i = argv._[0]; i <= argv._[1]; i++) {
    await page.goto(website + '#' + i);
    await page.screenshot({path: '/i/' + i + '.png'});
    console.log('saved slide ' + i);
  }

  await browser.close();
})();
