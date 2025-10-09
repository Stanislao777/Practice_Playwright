import { test, expect } from '@playwright/test';

test('test web table', async ({ page }) => {

  await page.goto('https://cosmocode.io/automation-practice-webtable/')

  const tableContainer = await page.locator("xpath=//table[@id='countries']")

  const rows = await tableContainer.locator("xpath=.//tr").all()
  
  console.log(rows.length)

  /* for(let row of rows){
    console.log(await row.innerText())
  } */

  const row1 = rows.at(1)

  const countryName = await row1?.locator('xpath=.//td[2]').innerText()
  const countryCapital = await row1?.locator('xpath=.//td[3]').innerText()
  const countryCurrency = await row1?.locator('xpath=.//td[4]').innerText()

  console.log(countryName, countryCapital, countryCurrency)
  

  await page.pause()
});

/*
element container: //table[@id='countries']
.//tr -> filas

//table[@id='countries']//tr[2]//td[1] -> Check
//table[@id='countries']//tr[2]//td[2] -> Country
//table[@id='countries']//tr[2]//td[3] -> Capital
//table[@id='countries']//tr[2]//td[4] -> Currency
//table[@id='countries']//tr[2]//td[5] -> Primary Language
 */