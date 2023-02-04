import { test, devices, expect } from '@playwright/test'; 


test.use ({
    browserName: 'chromium',
    ...devices['iPhone XR']
})

test.describe("The mobile viewport for iPhone XR", () => {
    test('Testing for colours on iPhone XR', async ({ page }) => {
        await page.goto('http://localhost3000/')

        const mainContainer = page.locator('#colouring'); 

        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyPriority("background-color")
        })


        console.log(checkingBackgroundColour); 
        expect(checkingBackgroundColour).toBe("rgb(255, 0, 0)"); 

    })
})