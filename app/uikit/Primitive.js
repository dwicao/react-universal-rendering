import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
  } = require('react-native');
}

class ViewPrimitive extends Component {
  render() {
    const {
      accessibilityLabel,
      accessible,
      hitSlop,
      nativeID,
      onAccessibilityTap,
      onLayout,
      onMagicTap,
      onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture,
      onResponderGrant,
      onResponderMove,
      onResponderReject,
      onResponderRelease,
      onResponderTerminate,
      onResponderTerminationRequest,
      onStartShouldSetResponder,
      onStartShouldSetResponderCapture,
      pointerEvents,
      removeClippedSubviews,
      testID,
      accessibilityComponentType,
      accessibilityLiveRegion,
      collapsable,
      importantForAccessibility,
      needsOffscreenAlphaCompositing,
      renderToHardwareTextureAndroid,
      accessibilityTraits,
      accessibilityViewIsModal,
      shouldRasterizeIOS,
      ...otherProps,
    } = this.props;

    if (IS_WEB) {
      return (
        <div {...otherProps}>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <View
          accessibilityLabel={accessibilityLabel}
          accessible={accessible}
          hitSlop={hitSlop}
          nativeID={nativeID}
          onAccessibilityTap={onAccessibilityTap}
          onLayout={onLayout}
          onMagicTap={onMagicTap}
          onMoveShouldSetResponder={onMoveShouldSetResponder}
          onMoveShouldSetResponderCapture={onMoveShouldSetResponderCapture}
          onResponderGrant={onResponderGrant}
          onResponderMove={onResponderMove}
          onResponderReject={onResponderReject}
          onResponderRelease={onResponderRelease}
          onResponderTerminate={onResponderTerminate}
          onResponderTerminationRequest={onResponderTerminationRequest}
          onStartShouldSetResponder={onStartShouldSetResponder}
          onStartShouldSetResponderCapture={onStartShouldSetResponderCapture}
          pointerEvents={pointerEvents}
          removeClippedSubviews={removeClippedSubviews}
          testID={testID}
          accessibilityComponentType={accessibilityComponentType}
          accessibilityLiveRegion={accessibilityLiveRegion}
          collapsable={collapsable}
          importantForAccessibility={importantForAccessibility}
          needsOffscreenAlphaCompositing={needsOffscreenAlphaCompositing}
          renderToHardwareTextureAndroid={renderToHardwareTextureAndroid}
          accessibilityTraits={accessibilityTraits}
          accessibilityViewIsModal={accessibilityViewIsModal}
          shouldRasterizeIOS={shouldRasterizeIOS}
          {...otherProps}>
            {this.props.children}
        </View>
      );
    }
  }
}

class TextPrimitive extends Component {
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

class TextInputPrimitive extends Component {
  render() {
    const {style, ...otherProps} = this.props;

    const defaultStyle = IS_WEB ? {
      outline: 'none',
      border: 0,
    } : {};

    if (IS_WEB) {
      return (
        <input
          type='text'
          style={{...defaultStyle, ...style}}
          {...otherProps}/>
      );
    } else {
      return (
        <TextInput style={style} {...otherProps}/>
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
  TextInput: TextInputPrimitive,
  Button: ButtonPrimitive,
  Image: ImagePrimitive,
  Br: BrPrimitive,
  Platform,
};
