import React, { Component } from 'react';
import { ContentExplorer, ContentPicker, ContentPreview } from 'box-ui-elements';
import messages from 'box-ui-elements/i18n/en-US';
// import { addLocaleData } from 'react-intl';
// import enLocaleData from 'react-intl/locale-data/en';
// import logo from './logo.svg';
import 'box-ui-elements/dist/explorer.css';
import * as appAuth from './appauth.json';
// import fs from "fs";
// const appAuth = require('./appauth.json');
// const appConfig = require('./config.js');
// const BoxSDK = appConfig.boxSDK;
const BoxSDK = require('box-node-sdk');  // Box SDK


class App extends Component {
	constructor(props) {
		super(props);

		const sdk = BoxSDK.getPreconfiguredInstance(appAuth);

		var client = sdk.getAppAuthClient('enterprise');
		console.log(client);

		var token = '';
		client.exchangeToken(['item_upload', 'item_delete'])
			.then(tokenInfo => {
				console.log("Hi I'm here")
				token = tokenInfo;
      });
      
      let devToken = "DEVTOKEN"
	}


  login() {
    
  }

  render() {
    return (
    <ContentExplorer
        token={this.devToken}
        language='en-US'
        messages={messages}
    />

    );
  }
}

export default App;
