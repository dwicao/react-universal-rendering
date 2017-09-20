import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {Text} = require('react-native');
}

export default class BrPrimitive extends Component {
  render() {
    if (IS_WEB) {
      return <br/>;
    } else {
      return <Text>{'\n'}</Text>;
    }
  }
}
