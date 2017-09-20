import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {Image} = require('react-native');
}

export default class ImagePrimitive extends Component {
  render() {
    const {
      blurRadius,
      onError,
      onLayout,
      onLoad,
      onLoadEnd,
      onLoadStart,
      resizeMode,
      source,
      testID,
      resizeMethod,
      accessibilityLabel,
      accessible,
      capInsets,
      defaultSource,
      onPartialLoad,
      onProgress,
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
          blurRadius={blurRadius}
          onError={onError}
          onLayout={onLayout}
          onLoad={onLoad}
          onLoadEnd={onLoadEnd}
          onLoadStart={onLoadStart}
          resizeMode={resizeMode}
          source={source}
          testID={testID}
          resizeMethod={resizeMethod}
          accessibilityLabel={accessibilityLabel}
          accessible={accessible}
          capInsets={capInsets}
          defaultSource={defaultSource}
          onPartialLoad={onPartialLoad}
          onProgress={onProgress}
          source={source}
          resizeMode={resizeMode || 'contain'}
          {...otherProps}/>
      );
    }
  }
}
