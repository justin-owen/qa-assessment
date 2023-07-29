const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking draw displays shuffled bots", async () => {
    await driver.get("http://localhost:8000")
    await driver.wait(until.elementLocated(By.css('#draw')), 1000)
    await driver.findElement(By.css('#draw')).click()
    await driver.findElement(By.css('#choices .bot-card')).isDisplayed()
  })
  test("Add to duo button displays your duo choice", async () =>{
    await driver.get("http://localhost:8000")
    await driver.wait(until.elementLocated(By.css('#draw')), 1000)
    await driver.findElement(By.css('#draw')).click()
    await driver.findElement(By.css('#choices .bot-btn')).click()
    await driver.findElement(By.css('#player-duo .bot-card')).isDisplayed()
  })
});