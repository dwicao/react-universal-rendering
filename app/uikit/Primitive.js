import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {
    View,
    Text,
    Image,
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
    const {
      onPress,
      children,
      ...otherProps
    } = this.props;

    if (IS_WEB) {
      return (
        <button
          {...otherProps}
          onClick={onPress}>
            {children}
        </button>
      );
    } else {
      return (
        <TouchableOpacity
          {...otherProps}
          onPress={onPress}>
            {children}
        </TouchableOpacity>
      );
    }
  }
}

class ImagePrimitive extends Component {
  render() {
    const {
      source,
      resizeMode,
      ...otherProps
    } = this.props;

    if (IS_WEB) {
      return (
        <img
          {...otherProps}
          src={source}/>
      );
    } else {
      return (
        <Image
          {...otherProps}
          source={source}
          resizeMode={resizeMode || 'contain'}/>
      );
    }
  }
}

class BrPrimitive extends Component {
  render() {
    if (IS_WEB) {
      return (
        <br/>
      );
    } else {
      return (
        <Text>{'\n'}</Text>
      );
    }
  }
}

module.exports = {
  View: ViewPrimitive,
  Text: TextPrimitive,
  Button: ButtonPrimitive,
  Image: ImagePrimitive,
  Br: BrPrimitive,
  Platform,
};
