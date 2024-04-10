import puppeteer from "puppeteer";

async function run() {
  // Launch the browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Permission for geolocation access
  const context = await browser.defaultBrowserContext();
  await context.overridePermissions(
    "https://marcoscaceres.github.io",
    ["geolocation"]
  );

  // Navigate to the test page
  await page.goto("https://marcoscaceres.github.io/playground/geo-pup");

  // Set new geolocation: latitude, longitude _after_ load
  await page.setGeolocation({
    latitude: 37.7749,
    longitude: -122.4194,
  });


  // Assuming the page displays latitude and longitude in elements with IDs 'latitude' and 'longitude'
  const latitude = await page.evaluate(
    () => document.getElementById("latitude")?.textContent
  );
  const longitude = await page.evaluate(
    () => document.getElementById("longitude")?.textContent
  );

  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  await browser.close();
}

run();
