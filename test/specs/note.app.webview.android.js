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

  it('', async ()=>{
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