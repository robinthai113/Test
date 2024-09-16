import { test, expect } from '@playwright/test';

test('Verify the title of Guru99 homepage!', async ({ page }) => {
  await page.goto('https://demo.guru99.com/');
  await expect(page).toHaveTitle('Guru99 Bank Home Page');

});


test('Verify the Instruction message presents!', async ({ page }) => {
  await page.goto('https://demo.guru99.com/');
  const instructionMessageLocator = page.locator('form[name="frmLogin"] h2')
  await expect(instructionMessageLocator).toContainText('Enter your email address to get access details to demo site');
});


