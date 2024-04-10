import puppeteer from "puppeteer";

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const context = await browser.defaultBrowserContext();
  await context.overridePermissions("https://marcoscaceres.github.io", [
    "geolocation",
  ]);

  // Set the geolocation
  await page.setGeolocation({ latitude: 37.7749, longitude: -122.4194 });

  // Navigate to the test page
  await page.goto("https://marcoscaceres.github.io/playground/geo-pup");

  const { latitude, longitude } = await page.evaluate(() => ({
    latitude: document.getElementById("latitude")?.textContent,
    longitude: document.getElementById("longitude")?.textContent,
  }));

  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  await browser.close();
}

run();
