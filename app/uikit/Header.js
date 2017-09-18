import React, { Component } from 'react';
import { View, Text, Button, Platform } from '../uikit/Primitive';

const IS_WEB = Platform.OS === 'web';

const styles = {
  textWrapper: IS_WEB ? {
    textAlign: 'center',
    backgroundColor: '#eee',
  } : {
    backgroundColor: '#eee',
  },
  myText: IS_WEB ? {
    color:'red',
    fontSize: 16,
  } : {
    color:'red',
    fontSize: 16,
    textAlign: 'center',
  },
  btn: IS_WEB ? {
    width: '100%',
    outline: 'none',
    border: 0,
    backgroundColor: 'transparent',
    padding: 5,
  } : {
    padding: 5,
  },
};

export default class Header extends Component {
  onPress() {
    alert('amazing');
  }

  render() {
    return (
      <View style={styles.textWrapper}>
        <Button
          style={styles.btn}
          onPress={() => this.onPress()}>
            <Text style={styles.myText}>
              {this.props.title}
            </Text>
        </Button>
      </View>
    );
  }
}
