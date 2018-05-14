import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  NativeModules,
} from 'react-360';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

import config from './components/config';
import styles from './components/styles';
import * as actions from './components/actions';
import reducer from './components/reducers';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import FlashAirList from './components/FlashAirList';

const {MyModule} = NativeModules;
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default class FlashAirIoTHub_VR extends React.Component {
  constructor(props) {
    super(props);
    const part = MyModule.locationHref.split('#');
    let accessToken = '';
    if (part.length === 2) {
      const fragments = new URLSearchParams(part[1]);
      accessToken = fragments.get("access_token")
    }
    this.props.setAccessToken(accessToken);
  }
  render() {
    if (!this.props.login) {
      return <Login />;
    }
    return (
      <View>
        <View style={styles.panel}>
          <View style={styles.header}>
            <Text style={styles.title}>
              FlashAir IoT Hub - VR Demo
            </Text>
            <UserInfo updateUserInfo={this.props.updateUserInfo} user={this.props.user} />
          </View>
          <View style={styles.content}>
            <FlashAirList
              updateFlashAirList={this.props.updateFlashAirList}
              selectFlashAir={this.props.selectFlashAir}
              flashairs={this.props.flashairs}
            />
            <View style={styles.greetingBox}><Text>{this.props.selectedFlashAir}</Text></View>
          </View>
        </View>
      </View>
    );
  }
};
const mapStateToProps = state => {
  return {
    login: !!state.accessToken,
    user: state.user,
    flashairs: state.flashairs,
    selectedFlashAir: state.selectedFlashAir,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setAccessToken: at => dispatch(actions.setAccessToken(at)),
    updateUserInfo: () => dispatch(actions.updateUserInfo()),
    updateFlashAirList: () => dispatch(actions.updateFlashAirList()),
    selectFlashAir: id => dispatch(actions.selectFlashAir(id)),
  };
};
FlashAirIoTHub_VR = connect(mapStateToProps, mapDispatchToProps)(FlashAirIoTHub_VR)
FlashAirIoTHub_VR1 = () => <Provider store={store}><FlashAirIoTHub_VR /></Provider>;

AppRegistry.registerComponent('FlashAirIoTHub_VR', () => FlashAirIoTHub_VR1);
