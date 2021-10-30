import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.iconSend}
          source={require('../../assets/images/send.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 55,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
    borderBottomWidth:0.2,
    shadowColor:'#000',
    elevation:4

  },
  iconSend: {
    width: 30,
    height: 30,
  },
});
