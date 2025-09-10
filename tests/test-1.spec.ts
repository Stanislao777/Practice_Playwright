import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.mercadolibre.com');
  await page.getByRole('link', { name: 'Colombia' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).click();
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).fill('Iphone');
  await page.getByRole('combobox', { name: 'Ingresa lo que quieras' }).press('Enter');
  await page.getByRole('link', { name: 'iPhone 16e (128 Gb) - Negro - Distribuidor Autorizado' }).click();
  await page.getByRole('button', { name: 'Comprar ahora' }).click();
});