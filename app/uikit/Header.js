import React, { Component } from 'react';
import { View, Text, Button, Platform } from '../uikit/Primitive';

const IS_WEB = Platform.OS === 'web';

const styles = {
  textWrapper: IS_WEB ? {
    textAlign: 'center',
  } : {},
  myText: IS_WEB ? {
    color:'red',
  } : {
    textAlign: 'center',
    color:'black',
  },
  button: IS_WEB ? {
    backgroundColor: '#eee',
  } : {
    backgroundColor: '#eee',
  },
};

export default class Header extends Component {
  onClick() {
    alert('amazing');
  }

  render() {
    return (
      <View style={styles.textWrapper}>
        <Button
          style={styles.button}
          onClick={() => this.onClick()}
        >
          <Text style={styles.myText}>
            {this.props.title}
          </Text>
        </Button>
      </View>
    );
  }
}
