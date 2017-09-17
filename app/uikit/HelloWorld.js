import React, { Component, PropTypes } from 'react';
import { View, Text, Platform } from 'react-primitives';

const IS_WEB = Platform.OS === 'web';

const styles = {
  myText: {
    textAlign: 'center',
    color: IS_WEB ? 'black' : 'red',
  },
};

export default class HelloWorld extends Component {
  render() {
    return (
      <View>
        <Text style={styles.myText}>
          Hey this is Amazing
        </Text>
      </View>
    );
  }
}
