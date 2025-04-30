import { Builder, By, until, WebDriver } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

jest.setTimeout(15000); // 15 seconds

describe('Application Smoke Tests', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    const options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should load the application and display welcome message', async () => {
    const appUrl = process.env.APP_URL || 'http://localhost:3000';
    await driver.get(appUrl);

    // Wait for the welcome message to be displayed
    const welcomeElement = await driver.wait(
      until.elementLocated(By.css('h1')),
      5000
    );
    const welcomeText = await welcomeElement.getText();
    expect(welcomeText).toBe('Welcome to Your App');

    // Wait for the API response to be displayed
    const messageElement = await driver.wait(
      until.elementLocated(By.xpath("//p[contains(text(), 'Hello from Lambda!')]")),
      5000
    );
    const messageText = await messageElement.getText();
    expect(messageText).toBe('Hello from Lambda!');
  });
});