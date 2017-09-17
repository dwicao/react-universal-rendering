import React, { Component } from 'react';
import { View, Text, Platform } from '../uikit/Primitive';

const IS_WEB = Platform.OS === 'web';

const styles = {
  textWrapper: IS_WEB ? {
    textAlign: 'center',
  } : {},
  myText: IS_WEB ? {
    color:'black',
  } : {
    textAlign: 'center',
    color:'red',
  },
};

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.myText}>
          Hey this is Amazing
        </Text>
      </View>
    );
  }
}
