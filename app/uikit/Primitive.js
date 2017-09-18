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
    const {
      style,
      children,
      ...otherProps
    } = this.props;

    const defaultStyle = IS_WEB ? {
      fontFamily: 'system-ui',
      fontWeight: 300,
    } : {};

    if (IS_WEB) {
      return (
        <span
          style={{...defaultStyle, ...style}}
          {...otherProps}>
            {children}
        </span>
      );
    } else {
      return (
        <Text style={style} {...otherProps}>
          {children}
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
          onClick={onPress}
          {...otherProps}>
            {children}
        </button>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={onPress}
          {...otherProps}>
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
          src={source}
          {...otherProps}/>
      );
    } else {
      return (
        <Image
          source={source}
          resizeMode={resizeMode || 'contain'}
          {...otherProps}/>
      );
    }
  }
}

class BrPrimitive extends Component {
  render() {
    if (IS_WEB) {
      return <br/>;
    } else {
      return <Text>{'\n'}</Text>;
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
