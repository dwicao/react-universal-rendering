import React, { Component } from 'react';
import { View, Image, Platform, TextInput } from '../uikit/Primitive';

import Header     from '../uikit/Header';
import HelloWorld from '../uikit/HelloWorld';

import imgLogo from '../images/logo.png';

const IS_WEB = Platform.OS === 'web';

const styles = {
  app: IS_WEB ? {
    paddingTop: 100,
  } : {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 100,
  },
  imgLogoWrapper : IS_WEB ? {
    margin: '1rem',
  } : {
    alignItems: 'center',
    margin: 10,
  },
  imgLogo: IS_WEB ? {
    display: 'block',
    margin: '0 auto',
  } : {
  },
  myTextInputWrapper: IS_WEB ? {
    marginTop: 10,
  } : {
    alignItems: 'center',
    marginTop: 10,
  },
  myTextInput: IS_WEB ? {
    display: 'block',
    margin: '0 auto',
  } : {},
}

class Main extends Component {
  render() {
    const { color } = this.props;

    return (
      <View style={styles.app}>
        <View style={styles.imgLogoWrapper}>
          <Image source={imgLogo} style={styles.imgLogo} height={100}/>
        </View>
        <Header title={this.props.title}/>
        <View style={styles.myTextInputWrapper}>
          <TextInput placeholder='This is text input...' style={styles.myTextInput}/>
        </View>
        <HelloWorld color={IS_WEB ? 'red' : 'black'} />
      </View>
    );
  }
}

export default Main;
