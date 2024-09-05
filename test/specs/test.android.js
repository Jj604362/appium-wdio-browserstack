// import { expect, browser, $ } from '@wdio/globals'

import mainScreenObjects from "../screenObjects/android/mainScreenObjects.js"

// describe('My Test from Test2', () => {

  

//     it('Finding element by acc id', async ()=>{
//         // find element and click
//         await $('~App').click()
//         // assertion
//         const alarm = await $('~Alarm')
//         await expect(alarm).toHaveText("Alarm")
//     })

    // it('test number 2', async ()=>{
    //     // this is to test if the 
    //     await $('~Alarm').click()

    // })
    // it('Scroll Vertically and find', async ()=>{
    //     await $('~App').click()
    //     await $('~Activity').click()
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click()
    //     // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1, 5)')

    //     const dialog = await $('~Secure Dialog')
    //     await expect(dialog).toHaveText("Secure Dialog")
    // })

    // it('Hori Scroll', async ()=>{
    //     // await driver.startActivity("io.appium.android.apis", ".view.Gallery1")
    //     await driver.startActivity('io.appium.android.apis', '.view.Gallery1')
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
    //     await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()')
    // })

    // working with page object model
    // it('Testing Using Page Object model', async ()=>{
    //     await mainScreenObjects.AppElement.click()
    //     await mainScreenObjects.AppElement.click()

        
    // })

   


// })


// trying to do webview on android but it does not work 
// i need to find out what is the best locator to use when in mobile webview

describe('Note app test for testing the webview', ()=>{

    it('Using the webview', async ()=>{
      //skip onboarding pages
      await $('//*[@text="SKIP"]').click()
      await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
      const fb = await $('//*[@text="Like us on Facebook"]')
      await expect(fb).toHaveText("Like us on Facebook")
    })
  
    it('Click on facebook link', async ()=>{
      await $('//*[@text="Like us on Facebook"]').click()
      
      const con = await driver.getContext()
      console.log(con)
      
     
      
      await $('//android.widget.Button[@text="󱤅"]').click()
  
      // looping to find another context till it is found or time out 
      let cons = new Array
      await driver.waitUntil(async () =>{
        //perform this action
        cons = await driver.getContexts()
        console.log(cons)
        // till this condition met or timeout
        return cons.length > 1
      }, {timeout: 3000, timeoutMsg: "Time out while waiting for context to show up"})  
  
     
      await driver.switchContext('WEBVIEW_chrome')
      
      const photo = await $('a[aria-label="ColorNote"]')
      await expect(photo).toBeDisplayed()
  
    })
  
    
  
  })

