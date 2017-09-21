import React, {Component} from 'react';
import Platform from './Platform';

const IS_WEB = Platform.OS === 'web';

if (!IS_WEB) {
  var {FlatList} = require('react-native');
}

export default class ViewPrimitive extends Component {
  render() {
    const {
      data,
      renderItem,
      keyExtractor,
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
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          {...otherProps}/>
      );
    }
  }
}
