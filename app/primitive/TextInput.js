import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {TextInput} = require('react-native');
}

export default class TextInputPrimitive extends Component {
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
