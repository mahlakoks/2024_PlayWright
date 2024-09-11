import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';


const config:PlaywrightTestConfig={
 // testMatch:["tests/dropdown.test.ts"],
  use:{
    headless:false,
    screenshot:"on",
    video:"on"
  },
  reporter:[["dot"],["html",{
    open:'false'
  }]]

}


export default config;
