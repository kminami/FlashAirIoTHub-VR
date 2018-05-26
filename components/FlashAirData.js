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
    return (
      <View style={styles.right}>
        <Text>Name: {this.props.flashair.name}</Text>
        <Text>ID: {this.props.flashair.id}</Text>
        {/*<Text>Last access: {this.props.lastAccess}</Text>*/}
        <Text>Images:</Text>
        <View style={styles.imageList}>
          {this.props.files
          .filter(file => file.type === 'image')
          .map(file => (
            <View style={styles.image} key={file.id}>
              <FetchImage deviceId={this.props.flashair.id} imageId={file.id} />
              <Text>{file.name}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
};
