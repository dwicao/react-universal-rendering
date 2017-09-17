import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {
    View,
    Text,
    TouchableOpacity,
  } = require('react-native');
}

class ViewPrimitive extends Component {
  render() {
    if (IS_WEB) {
      return (
        <div {...this.props}>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <View {...this.props}>
          {this.props.children}
        </View>
      );
    }
  }
}

class TextPrimitive extends Component {
  render() {
    if (IS_WEB) {
      return (
        <span {...this.props}>
          {this.props.children}
        </span>
      );
    } else {
      return (
        <Text {...this.props}>
          {this.props.children}
        </Text>
      );
    }
  }
}

class ButtonPrimitive extends Component {
  render() {
    if (IS_WEB) {
      return (
        <button {...this.props}>
          {this.props.children}
        </button>
      );
    } else {
      return (
        <TouchableOpacity
          {...this.props}
          onPress={this.props.onClick}
        >
          {this.props.children}
        </TouchableOpacity>
      );
    }
  }
}

module.exports = {
  View: ViewPrimitive,
  Text: TextPrimitive,
  Button: ButtonPrimitive,
  Platform,
};
