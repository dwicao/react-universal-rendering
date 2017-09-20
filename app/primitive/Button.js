import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {TouchableOpacity} = require('react-native');
}

export default class ButtonPrimitive extends Component {
  render() {
    const {
      activeOpacity,
      tvParallaxProperties,
      accessibilityComponentType,
      accessibilityTraits,
      accessible,
      delayLongPress,
      delayPressIn,
      delayPressOut,
      disabled,
      hitSlop,
      onLayout,
      onLongPress,
      onPressIn,
      onPressOut,
      pressRetentionOffset,
      onPress,
      children,
      ...otherProps
    } = this.props;

    if (IS_WEB) {
      return (
        <button
          disabled={disabled}
          onClick={onPress}
          {...otherProps}>
            {children}
        </button>
      );
    } else {
      return (
        <TouchableOpacity
          activeOpacity={activeOpacity}
          tvParallaxProperties={tvParallaxProperties}
          accessibilityComponentType={accessibilityComponentType}
          accessibilityTraits={accessibilityTraits}
          accessible={accessible}
          delayLongPress={delayLongPress}
          delayPressIn={delayPressIn}
          delayPressOut={delayPressOut}
          disabled={disabled}
          hitSlop={hitSlop}
          onLayout={onLayout}
          onLongPress={onLongPress}
          onPress={onPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          pressRetentionOffset={pressRetentionOffset}
          onPress={onPress}
          {...otherProps}>
            {children}
        </TouchableOpacity>
      );
    }
  }
}
