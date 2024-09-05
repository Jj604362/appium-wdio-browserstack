import { config } from "../wdio.shared.conf.js";
config.specs = [
    // for the first android test app
    // '../../test/specs/test.android.js'
    // 'C:/Users/2727588/Documents/BrowserStackTest/Test2/test/specs/test.android.js'
    // for note test app
    '../../test/specs/note.app.webview.android.js'
    
]

config.services = ['browserstack']


config.capabilities = [
    // {
        // capabilities for local Appium web tests on an Android Emulator
        // platformName: 'Android',
        // deviceName: 'Google Pixel 8 Pro',
        // platformVersion: '14.0',
        // automationName: 'UiAutomator2',
        // app:'bs://6d89de9eb073978accbcc6a0a96a93b00e1e8261',
        // autoGrantPermissions: true
    // }, 
    {
        platformName: 'Android',
        deviceName: 'Google Pixel 8 Pro',
        platformVersion: '14.0',
        automationName: 'UiAutomator2',
        // app:'bs://854adc997551a6a94358edf09b93bf165af5ab98',
        // app:'bs://98770c4a9a8db5fc69e89f9e19f74739979f540d',
        // color note app
        app: 'bs://d73e48a6b50c39c123103ef8db3061fa472486d2',
        autoGrantPermissions: true
        
      }
]


export{config as config}