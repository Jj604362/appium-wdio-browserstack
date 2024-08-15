// import { expect, browser, $ } from '@wdio/globals'

import mainScreenObjects from "../screenObjects/android/mainScreenObjects.js"

describe('My Test from Test2', () => {

  

    it('Finding element by acc id', async ()=>{
        // find element and click
        await $('~App').click()
        // assertion
        const alarm = await $('~Alarm')
        await expect(alarm).toHaveText("Alarm")
    })

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

   


})

