import React from 'react';
import {
  Text,
  View,
  VrButton,
} from 'react-360';

import styles from './styles';

export default class UserInfo extends React.Component {
  componentWillMount() {
    this.props.updateUserInfo();
  }
  render() {
    return (
      <Text>Welcome {this.props.user.email}!</Text>
    );
  }
};

