// config file to run test locally using appium services

import { config } from "../wdio.shared.conf.js";
config.specs = [
    '../../test/specs/test.android.js'
]

config.services = ['appium']

config.capabilities = [
    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        deviceName: 'Google Pixel 8 Pro',
        platformVersion: '14.0',
        automationName: 'UiAutomator2',
        app:'path to my local app',
        autoGrantPermissions: true
    }
]


export{config as config}