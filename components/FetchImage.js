import React from 'react';
import {
  Image,
} from 'react-360';
import { connect } from 'react-redux';

import styles from './styles';
import config from './config';

class FetchImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { objectURL: null };
  }
  componentWillMount() {
    fetch(`${config.apiBase}/v1/flashairs/${this.props.deviceId}/images/${this.props.imageId}`, {
      headers: { Authorization: `Bearer ${this.props.accessToken}` },
    }).then(response => {
      if (response.status === 401) {
        this.props.setAccessToken('');
        return;
      }
      if (response.status !== 200) {
        console.log('error', response.status)
        return;
      }
      console.log(response.json);
      console.log(response.blob);
      response.blob().then(data => {
        this.setState({ objectURL: URL.createObjectURL(data) });
      });
    });
  }
  render() {
    if (!this.state.objectURL) {
      return null;
    }
    return (
      <Image source={{uri: this.state.objectURL}} />
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
