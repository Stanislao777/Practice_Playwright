import { test, expect } from '@playwright/test';

test('test web table', async ({ page }) => {

  await page.goto('https://cosmocode.io/automation-practice-webtable/')

  

  await page.pause()
});

/*
.//tr -> filas

//table[@id='countries']//tr[2]//td[1] -> Check
//table[@id='countries']//tr[2]//td[2] -> Country
//table[@id='countries']//tr[2]//td[3] -> Capital
//table[@id='countries']//tr[2]//td[4] -> Currency
//table[@id='countries']//tr[2]//td[5] -> Primary Language
 */