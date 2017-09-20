import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {View} = require('react-native');
}

export default class ViewPrimitive extends Component {
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
