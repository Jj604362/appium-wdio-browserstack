import { config } from "../wdio.shared.conf.js";
config.specs = [
    '../../test/specs/test.android.js'
    // 'C:/Users/2727588/Documents/BrowserStackTest/Test2/test/specs/test.android.js'
    
]

config.services = ['browserstack']


config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        deviceName: 'Google Pixel 8 Pro',
        platformVersion: '14.0',
        automationName: 'UiAutomator2',
        app:'bs://6d89de9eb073978accbcc6a0a96a93b00e1e8261',
        autoGrantPermissions: true
    }
]


export{config as config}