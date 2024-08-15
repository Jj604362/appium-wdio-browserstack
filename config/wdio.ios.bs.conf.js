import { config } from "./wdio.shared.conf.js";
config.specs = [
    '../test/specs/test.ios.js'
]

config.capabilities = [
    {
        deviceName: 'iPhone 15 Pro Max',
        platformVersion: '17',
        platformName: 'ios',
        app:'bs://854adc997551a6a94358edf09b93bf165af5ab98',
        autoGrantPermissions: true

      
    }, 
    {
        deviceName: 'iPhone XS',
        platformVersion: '15',
        platformName: 'ios',
        app:'bs://854adc997551a6a94358edf09b93bf165af5ab98',

       }, 

      {
        deviceName: 'iPhone 11',
        platformVersion: '14',
        platformName: 'ios',
        app:'bs://854adc997551a6a94358edf09b93bf165af5ab98',

      
    }
]


export{config as config}