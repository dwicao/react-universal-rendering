import React, { Component, PropTypes } from 'react';
import { View, Platform } from 'react-primitives';

import Header     from '../uikit/Header';
import HelloWorld from '../uikit/HelloWorld';

const IS_WEB = Platform.OS === 'web';

const styles = {
  app: {
    marginTop: 50,
  }
}

class Universal extends Component {
  render() {
    const { color } = this.props;

    return (
      <View style={styles.app}>
        <Header title={this.props.title}/>
        <HelloWorld color={IS_WEB ? 'red' : 'black'} />
      </View>
    );
  }
}

export default Universal;
