import React, { Component } from 'react';
import { View, Image, Platform, TextInput, FlatList, Text } from '../primitive';

const IS_WEB = Platform.OS === 'web';

const styles = {
  app: IS_WEB ? {
    display: 'block',
    margin: '0 auto',
    width: '15rem',
  } : {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  itemWrapper: IS_WEB ? {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 5,
  } : {
    width: 250,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemText: IS_WEB ? {} : {
    textAlign: 'center',
  },
  txtWrapper: IS_WEB ? {
    display: 'flex',
    flexDirection: 'column',
  } : {},
  image: {
    width: 48,
    height: 48,
  },
  icon: {
    width: 16,
    height: 16,
  },
  txtCenter: IS_WEB ? {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } : {
    textAlign: 'center',
  }
}

class Main extends Component {
  state = {
    data: [],
    loading: false,
    error: false,
  }

  componentDidMount() {
    const url = 'https://randomuser.me/api/?inc=name,picture,phone&page=1&results=20&seed=dwicao';

    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: [...this.state.data, ...res.results],
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  _keyExtractor = (item, index) => item.phone;

  _renderItem = ({item}) => {
    return (
      <View key={item.phone} style={styles.itemWrapper}>
        <Image source={{ uri: item.picture.thumbnail }} style={styles.image}/>
        <View style={styles.txtWrapper}>
          <Text>
            {item.name.first} {item.name.last}
          </Text>
          <Text>
            {item.phone}
          </Text>
        </View>
        <Image source={{ uri: 'https://image.ibb.co/gL5syk/information.png' }} style={styles.icon}/>
      </View>
    );
  }

  render() {
    const { data, error, loading } = this.state;

    return (
      <View style={styles.app}>
        <Text style={styles.txtCenter}>react-universal-rendering</Text>
        {loading && <Text style={styles.txtCenter}>Loading...</Text>}
        {!error ? (
          <FlatList
            data={data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
          />
        ) : (
          <Text style={styles.txtCenter}>An error occured :(</Text>
        )}
      </View>
    );
  }
}

export default Main;
