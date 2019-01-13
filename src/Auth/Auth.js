import { AUTH_CONFIG } from './auth0-variables';
const boxSDK = require('box-node-sdk');  // Box SDK
// curl https://api.box.com/2.0/folders/0 -H \
// "Authorization: Bearer xVlnyFW0bz7VaihpDzANmwr7hBDvpZNp"


const fs = require('fs');                // File system for config

// Fetch config file for instantiating SDK instance
const configJSON = JSON.parse(fs.readFileSync('./boxconfig.json'));

// Instantiate instance of SDK using generated JSON config
const sdk = boxSDK.getPreconfiguredInstance(configJSON);


const client = sdk.getAppAuthClient('enterprise', appConfig.enterpriseId);

console.log(client);