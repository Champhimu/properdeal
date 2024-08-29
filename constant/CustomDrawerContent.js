// CustomDrawerContent.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Svg, { Path } from 'react-native-svg';

const CustomDrawerContent = (props) => {
  // Dummy user data
  const user = {
    name: 'John Doe (4.5)',
    mobileNo: '9324564XXX',
    image: 'https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?rs=1&pid=ImgDetMain',
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      <View style={styles.userInfoContainer} >
        <View style={styles.userDetailContainer}>
            <Image source={{ uri: user.image }} style={styles.userImage} />
            <View>
                
            </View>
            <Svg viewBox="0 0 25 25" fill="none" style={{ width: 25, height: 25, marginLeft: 18, marginTop: 12 }}>
                <Path d="M0 0.21698V11.4195H11.4129V0.21698H0ZM9.78248 9.81917H1.6304V1.81733H9.78248V9.81917Z" fill="white"/>
                <Path d="M7.72519 4.29413H4.15381V7.79969H7.72519V4.29413Z" fill="white"/>
                <Path d="M13.5869 0.21698V11.4195H24.9998V0.21698H13.5869ZM23.3694 9.81917H15.2173V1.81733H23.3694V9.81917Z" fill="white"/>
                <Path d="M21.3116 4.29413H17.7402V7.79969H21.3116V4.29413Z" fill="white"/>
                <Path d="M0 13.5534V24.7559H11.4129V13.5534H0ZM9.78248 23.1556H1.6304V15.1537H9.78248V23.1556Z" fill="white"/>
                <Path d="M7.72519 17.6305H4.15381V21.136H7.72519V17.6305Z" fill="white"/>
                <Path d="M16.8477 15.1537V13.5534H13.5869V24.7559H16.8477V23.1556H15.2173V19.9548H16.8477V18.3545H15.2173V15.1537H16.8477Z" fill="white"/>
                <Path d="M25 13.5534H23.3696V15.1537H25V13.5534Z" fill="white"/>
                <Path d="M23.3692 17.2875V23.1555H21.7388V24.7558H24.9996V17.2875H23.3692Z" fill="white"/>
                <Path d="M21.7398 13.5533H18.479V15.1537H21.7398V13.5533Z" fill="white"/>
                <Path d="M21.7398 18.3545V16.7541H18.479V21.5552H21.7398V19.9548H20.1094V18.3545H21.7398Z" fill="white"/>
                <Path d="M20.1094 23.1555H18.479V24.7559H20.1094V23.1555Z" fill="white"/>
            </Svg>
        </View>
        <View style={styles.userDetailContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userName}>New user</Text>
            <Text style={styles.mobileNo}>{user.mobileNo}</Text>
            <Text style={{color: 'white'}}> Edit profile</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.menuContainer}>
        <DrawerItemList {...props} />
      </ScrollView>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 0
  },
  userInfoContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C04F5C'
  },
  userImage: {
    width: 60.75,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  mobileNo: {
    fontSize: 15,
    color: 'white'
  },
  userDetailContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  menuContainer: {
    flexGrow: 1,
  }
});

export default CustomDrawerContent;
