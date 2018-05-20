import React from 'react';
import {
  Text,
  View,
  VrButton,
} from 'react-360';

import styles from './styles';

export default class FlashAirList extends React.Component {
  componentWillMount() {
    this.props.updateFlashAirList();
  }
  render() {
    const flashairs = this.props.flashairs.map(flashair =>
      <VrButton key={flashair.id} onClick={this.props.selectFlashAir.bind(this.props, flashair.id)}>
        <Text>{flashair.name}</Text>
      </VrButton>
    )
    return (
      <View style={styles.left}>
        {flashairs}
      </View>
    );
  }
};
