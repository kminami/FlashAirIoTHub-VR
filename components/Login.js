import React from 'react';
import {
  Text,
  View,
  VrButton,
  Image,
  NativeModules,
  StyleSheet,
  asset,
} from 'react-360';

import config from './config';
import styles from './styles';

const {MyModule} = NativeModules;

export default class Login extends React.Component {
  _login = () => {
    MyModule.setLocationHref(`${config.apiBase}/v1/authorize?response_type=token&client_id=${config.clientId}&redirect_uri=${MyModule.locationHref.split('#')[0]}&state=xyz`);
  };
  gotoGitHub() {
    MyModule.setLocationHref("https://github.com/kminami/FlashAirIoTHub-VR");
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
        <View style={localStyles.row}>
          <Text style={localStyles.sourceCode}>View source in </Text>
          <VrButton onClick={this.gotoGitHub}>
            <Image style={localStyles.github} source={asset('GitHub_Logo_White.png')} />
          </VrButton>
        </View>
      </View>
    );
  }
};

const localStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  sourceCode: {
    marginTop: 10,
    fontSize: 20,
  },
  github: {
    width: 100, // 1000
    height: 41, // 410
  },
});
