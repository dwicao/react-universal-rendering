import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import NativeContainers from './app/native/containers';

class ReactNativeHelloWorld extends Component {
  render() {
    return (
      <NativeContainers />
    );
  }
}

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeHelloWorld);
