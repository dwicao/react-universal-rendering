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
    const {
      autoCapitalize,
      autoCorrect,
      autoFocus,
      blurOnSubmit,
      caretHidden,
      defaultValue,
      editable,
      keyboardType,
      maxLength,
      multiline,
      onBlur,
      onChange,
      onChangeText,
      onContentSizeChange,
      onEndEditing,
      onFocus,
      onLayout,
      onScroll,
      onSelectionChange,
      onSubmitEditing,
      placeholder,
      placeholderTextColor,
      returnKeyType,
      secureTextEntry,
      selectTextOnFocus,
      selection,
      selectionColor,
      disableFullscreenUI,
      inlineImageLeft,
      inlineImagePadding,
      numberOfLines,
      returnKeyLabel,
      textBreakStrategy,
      underlineColorAndroid,
      clearButtonMode,
      clearTextOnFocus,
      dataDetectorTypes,
      enablesReturnKeyAutomatically,
      keyboardAppearance,
      onKeyPress,
      selectionState,
      spellCheck,
      value,
      style,
      ...otherProps
    } = this.props;

    const defaultStyle = IS_WEB ? {
      outline: 'none',
      border: 0,
    } : {};

    if (IS_WEB) {
      return (
        <input
          type='text'
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          style={{...defaultStyle, ...style}}
          {...otherProps}/>
      );
    } else {
      return (
        <TextInput
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          blurOnSubmit={blurOnSubmit}
          caretHidden={caretHidden}
          defaultValue={defaultValue}
          editable={editable}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          onBlur={onBlur}
          onChange={onChange}
          onChangeText={onChangeText}
          onContentSizeChange={onContentSizeChange}
          onEndEditing={onEndEditing}
          onFocus={onFocus}
          onLayout={onLayout}
          onScroll={onScroll}
          onSelectionChange={onSelectionChange}
          onSubmitEditing={onSubmitEditing}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          returnKeyType={returnKeyType}
          secureTextEntry={secureTextEntry}
          selectTextOnFocus={selectTextOnFocus}
          selection={selection}
          selectionColor={selectionColor}
          disableFullscreenUI={disableFullscreenUI}
          inlineImageLeft={inlineImageLeft}
          inlineImagePadding={inlineImagePadding}
          numberOfLines={numberOfLines}
          returnKeyLabel={returnKeyLabel}
          textBreakStrategy={textBreakStrategy}
          underlineColorAndroid={underlineColorAndroid}
          clearButtonMode={clearButtonMode}
          clearTextOnFocus={clearTextOnFocus}
          dataDetectorTypes={dataDetectorTypes}
          enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
          keyboardAppearance={keyboardAppearance}
          onKeyPress={onKeyPress}
          selectionState={selectionState}
          spellCheck={spellCheck}
          value={value}
          style={style}
          {...otherProps}/>
      );
    }
  }
}

class ButtonPrimitive extends Component {
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
      onPress,
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
