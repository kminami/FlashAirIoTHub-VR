import React from 'react';
import {
  Text,
  View,
  VrButton,
  NativeModules,
} from 'react-360';

import config from './config';
import styles from './styles';

const {MyModule} = NativeModules;

export default class Login extends React.Component {
  _login = () => {
    MyModule.setLocationHref(`${config.apiBase}/v1/authorize?response_type=token&client_id=${config.clientId}&redirect_uri=${MyModule.locationHref.split('#')[0]}&state=xyz`);
  };
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.title}>
            FlashAir IoT Hub - VR Demo
          </Text>
        </View>
        <VrButton onClick={this._login} style={styles.greetingBox}>
          <Text>Login</Text>
        </VrButton>
      </View>
    );
  }
};
