import React from 'react';
import {
  Image,
  NativeModules,
} from 'react-360';
import { connect } from 'react-redux';

import styles from './styles';
import config from './config';

const { MyModule } = NativeModules;

class FetchImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { objectURL: null };
  }
  componentWillMount() {
    MyModule.fetchBlob(
      `${config.apiBase}/v1/flashairs/${this.props.deviceId}/images/${this.props.imageId}`,
      { headers: { Authorization: `Bearer ${this.props.accessToken}` } },
    ).then(url => {
      this.setState({ objectURL: url });
    });
  }
  render() {
    if (!this.state.objectURL) {
      return null;
    }
    return (
      <Image style={styles.thumbnail} source={{uri: this.state.objectURL}} />
    );
  }
};
const mapStateToProps = state => {
  return {
    accessToken: state.accessToken,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setAccessToken: at => dispatch(actions.setAccessToken(at)),
  };
};
FetchImage = connect(mapStateToProps, mapDispatchToProps)(FetchImage);

export default FetchImage;
