import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {Text} = require('react-native');
}

export default class TextPrimitive extends Component {
  render() {
    const {
      accessible,
      allowFontScaling,
      ellipsizeMode,
      nativeID,
      numberOfLines,
      onLayout,
      onLongPress,
      onPress,
      pressRetentionOffset,
      selectable,
      testID,
      disabled,
      selectionColor,
      textBreakStrategy,
      adjustsFontSizeToFit,
      minimumFontScale,
      suppressHighlighting,
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
        <Text
          accessible={accessible}
          allowFontScaling={allowFontScaling}
          ellipsizeMode={ellipsizeMode}
          nativeID={nativeID}
          numberOfLines={numberOfLines}
          onLayout={onLayout}
          onLongPress={onLongPress}
          onPress={onPress}
          pressRetentionOffset={pressRetentionOffset}
          selectable={selectable}
          testID={testID}
          disabled={disabled}
          selectionColor={selectionColor}
          textBreakStrategy={textBreakStrategy}
          adjustsFontSizeToFit={adjustsFontSizeToFit}
          minimumFontScale={minimumFontScale}
          suppressHighlighting={suppressHighlighting}
          style={style}
          {...otherProps}>
            {children}
        </Text>
      );
    }
  }
}
