import React, { Component } from 'react';
import { View, Text, Platform } from 'react-primitives';

const IS_WEB = Platform.OS === 'web';

const styles = {
  myText: {
    textAlign: 'center',
    color: IS_WEB ? 'red' : 'black',
  },
};

export default class Header extends Component {
  render() {
    return (
      <View>
        <Text style={styles.myText}>
          {this.props.title}
        </Text>
      </View>
    );
  }
}
