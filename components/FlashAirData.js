import React from 'react';
import {
  Text,
  View,
} from 'react-360';

import styles from './styles';
import FetchImage from './FetchImage';

export default class FlashAirData extends React.Component {
  render() {
    if (!this.props.flashair) {
      return null;
    }
    let files = [];
    if (this.props.files) {
      files = this.props.files.map(file => (
        <View key={file.id}>
          <Text>{file.id} {file.name}</Text>
          {/*<FetchImage deviceId={this.props.flashair.id} imageId={file.id} />*/}
        </View>
      ));
    }
    return (
      <View style={styles.right}>
        <Text>Name: {this.props.flashair.name}</Text>
        <Text>ID: {this.props.flashair.id}</Text>
        {/*<Text>Last access: {this.props.lastAccess}</Text>*/}
        <Text>Files:</Text>
        {files}
      </View>
    );
  }
};
