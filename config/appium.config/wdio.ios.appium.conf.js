import { config } from "../wdio.shared.conf.js";
config.specs = [
    '../../test/specs/test.ios.js'
]

config.services = ['appium']

config.capabilities = [
    {
        deviceName: 'iPhone 15 Pro Max',
        platformVersion: '17',
        platformName: 'ios',
        app:'path to my local app',
        autoGrantPermissions: true

      
    }, 
    {
        deviceName: 'iPhone XS',
        platformVersion: '15',
        platformName: 'ios',
        app:'path to my local app',
        autoGrantPermissions: true

       }, 

      {
        deviceName: 'iPhone 11',
        platformVersion: '14',
        platformName: 'ios',
        app:'path to my local app',
        autoGrantPermissions: true
    }
]


export{config as config}