import React, { Component } from 'react';
import { View, Text, Platform, Br } from '../primitive';

const IS_WEB = Platform.OS === 'web';

const styles = {
  textWrapper: IS_WEB ? {
    marginTop: 10,
    textAlign: 'center',
  } : {
    marginTop: 10,
  },
  myText: IS_WEB ? {
    color: 'black',
    fontSize: 20,
  } : {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
};

export default class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.myText}>
          Single codebase<Br/>
          Web, Android, and iOS<Br/>
          using React
        </Text>
      </View>
    );
  }
}
