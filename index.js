import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  NativeModules,
} from 'react-360';

import config from './components/config';
import styles from './components/styles';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import FlashAirList from './components/FlashAirList';

const {MyModule} = NativeModules;

export default class FlashAirIoTHub_VR extends React.Component {
  constructor(props) {
    super(props);
    const part = MyModule.locationHref.split('#');
    let accessToken = '';
    if (part.length === 2) {
      const fragments = new URLSearchParams(part[1]);
      accessToken = fragments.get("access_token")
    }
    this.state = { 
      accessToken,
      user: {email: ''},
      flashairs: [],
    };
  }
  _updateFlashAirList = () => {
    fetch(`${config.apiBase}/v1/flashairs`, {
      headers: {
        'Authorization': `Bearer ${this.state.accessToken}`,
      },
    }).then(response => {
      if (response.status === 401) {
        this.setState({accessToken: ''});
        return;
      }
      if (response.status !== 200) {
        console.log('error', response.status)
        return;
      }
      response.json().then(body => {
        this.setState({flashairs: body.flashairs});
      });
    });
  };
  _updateUserInfo = () => {
    fetch(`${config.apiBase}/v1/users/self`, {
      headers: {
        'Authorization': `Bearer ${this.state.accessToken}`,
      },
    }).then(response => {
      if (response.status === 401) {
        this.setState({accessToken: ''});
        return;
      }
      if (response.status !== 200) {
        console.log('error', response.status)
        return;
      }
      response.json().then(user => {
        this.setState({ user });
      });
    });
  };
  render() {
    return (
      <View>
        {this.state.accessToken ? (
          <View style={styles.panel}>
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                FlashAir IoT Hub - VR Demo
              </Text>
            </View>
            <UserInfo updateUserInfo={this._updateUserInfo} user={this.state.user} />
            <FlashAirList updateFlashAirList={this._updateFlashAirList} flashairs={this.state.flashairs} />
          </View>
        ) : (
          <Login />
        )}
      </View>
    );
  }
};

AppRegistry.registerComponent('FlashAirIoTHub_VR', () => FlashAirIoTHub_VR);
