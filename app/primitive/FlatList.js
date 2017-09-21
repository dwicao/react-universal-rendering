import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {FlatList} = require('react-native');
}

export default class ViewPrimitive extends Component {
  render() {
    const {
      ItemSeparatorComponent,
      ListEmptyComponent,
      ListFooterComponent,
      ListHeaderComponent,
      columnWrapperStyle,
      data,
      extraData,
      getItemLayout,
      horizontal,
      initialNumToRender,
      initialScrollIndex,
      inverted,
      keyExtractor,
      legacyImplementation,
      numColumns,
      onEndReached,
      onEndReachedThreshold,
      onRefresh,
      onViewableItemsChanged,
      refreshing,
      removeClippedSubviews,
      renderItem,
      viewabilityConfig,
      progressViewOffset,
      ...otherProps,
    } = this.props;

    if (IS_WEB) {
      return (
        <div {...otherProps}>
          {(data || []).map( (item, index) => renderItem({item}) )}
        </div>
      );
    } else {
      return (
        <FlatList
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListEmptyComponent={ListEmptyComponent}
          ListFooterComponent={ListFooterComponent}
          ListHeaderComponent={ListHeaderComponent}
          columnWrapperStyle={columnWrapperStyle}
          data={data}
          extraData={extraData}
          getItemLayout={getItemLayout}
          horizontal={horizontal}
          initialNumToRender={initialNumToRender}
          initialScrollIndex={initialScrollIndex}
          inverted={inverted}
          keyExtractor={keyExtractor}
          legacyImplementation={legacyImplementation}
          numColumns={numColumns}
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          onRefresh={onRefresh}
          onViewableItemsChanged={onViewableItemsChanged}
          refreshing={refreshing}
          removeClippedSubviews={removeClippedSubviews}
          renderItem={renderItem}
          viewabilityConfig={viewabilityConfig}
          progressViewOffset={progressViewOffset}
          {...otherProps}/>
      );
    }
  }
}
