import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';
import { execSync } from 'child_process';

const config:PlaywrightTestConfig={
  testMatch:["tests/pom.login.ts"],
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
