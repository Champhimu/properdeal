import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StatusBar, Platform, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import ProfileScreen from './ui/pages/Profile';
import SettingsScreen from './ui/pages/Settings';
import SavedScreen from './ui/pages/Saved';
import ReferScreen from './ui/pages/Refer';
import DrawerItems from './constant/DrawerItems';
import Header from './components/Header';
import CustomDrawerContent from './constant/CustomDrawerContent'; // Custom Drawer Content
import Svg, { Path, Rect, Circle } from 'react-native-svg';

// Create navigators
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator component
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          display: 'flex',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 5,
          backgroundColor: '#fffffa',
          borderRadius: 0,
          height: 60,
        },
        tabBarShowLabel: false,
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 2, // Adjust the spacing between icon and text
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M10.7918 0.380035C10.2287 -0.126678 9.37378 -0.126678 8.81077 0.380035L0.918945 7.48267V15.1812C0.918945 16.4889 1.97944 17.5494 3.28773 17.5494H16.3154C17.623 17.5494 18.6835 16.4889 18.6835 15.1812V7.48267L10.7918 0.380035ZM12.0219 16.0977H7.58054V12.3466C7.58054 11.1201 8.57469 10.1259 9.80123 10.1259C11.0278 10.1259 12.0219 11.1201 12.0219 12.3466V16.0977Z" fill={focused ? '#C04F5C' : '#A38689'} />
              </Svg>
              <Text style={[styles.iconLabel, { color: focused ? '#C04F5C' : '#A38689' }]}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={ReferScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="9" cy="9" r="8.25" stroke="#A38689" strokeWidth="1.5" />
                <Path d="M4.63367 11.5628C4.24581 12.3425 4.97068 13.2109 5.80715 12.9687L10.6069 11.5788C11.3002 11.3781 11.559 10.5316 11.0965 9.97752L8.52232 6.89341C8.05987 6.33935 7.1807 6.44264 6.85926 7.0888L4.63367 11.5628Z" fill={focused ? '#C04F5C' : '#A38689'} />
                <Path d="M12.6607 4.85632C13.5106 4.59156 14.2568 5.4856 13.8444 6.27441L11.377 10.9934C11.0466 11.6253 10.18 11.7182 9.72312 11.1708L7.10638 8.03576C6.64948 7.48835 6.8959 6.65232 7.57666 6.44023L12.6607 4.85632Z" fill={focused ? '#C04F5C' : '#A38689'} />
                <Circle cx="9.16885" cy="8.99066" r="0.943231" transform="rotate(50.1495 9.16885 8.99066)" fill={focused ? '#C04F5C' : '#A38689'} />
              </Svg>
              <Text style={[styles.iconLabel, { color: focused ? '#C04F5C' : '#A38689' }]}>Discover</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={SavedScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              top: Platform.OS === 'ios' ? 0 : 2,
              width: Platform.OS === 'ios' ? 50 : 60,
              height: Platform.OS === 'ios' ? 50 : 60,
              borderRadius: Platform.OS === 'ios' ? 25 : 40,
              marginLeft: Platform.OS === 'ios' ? 20 : 15,
              backgroundColor: 'white',
            }}>
              <Icon name="pluscircle" size={Platform.OS === 'ios' ? 50 : 50} color={focused ? '#C04F5C' : '#C04F5C'} />
            </View>
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Activities"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="9" cy="9" r="8.25" stroke={focused ? '#C04F5C' : '#A38689'} strokeWidth="1.5" />
                <Path d="M8.07812 4.42407V10.1525L11.8797 11.8159" stroke={focused ? '#C04F5C' : '#A38689'} strokeWidth="1.5" strokeLinecap="round" />
              </Svg>
              <Text style={[styles.iconLabel, { color: focused ? '#C04F5C' : '#A38689' }]}>Activities</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Svg width="18" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M12.1579 2.55791C11.8838 2.55791 11.6237 2.61855 11.3897 2.72639C11.2309 1.87099 10.4797 1.22106 9.57895 1.22106C9.296 1.22106 9.02786 1.28531 8.78806 1.39982C8.58941 0.597026 7.86328 0 7 0C6.13672 0 5.41059 0.597063 5.21194 1.39982C4.97217 1.28535 4.704 1.22106 4.42105 1.22106C3.40532 1.22106 2.57895 2.04743 2.57895 3.06316V7.56608C2.35314 7.46712 2.10402 7.41182 1.84211 7.41182C0.826368 7.41182 0 8.23819 0 9.25393V13.0421C0 15.7033 2.16506 17.8684 4.82632 17.8684H9.17368C11.8349 17.8684 14 15.7033 14 13.0421V4.40002C14 3.38424 13.1736 2.55791 12.1579 2.55791ZM12.8947 13.0421C12.8947 15.0939 11.2255 16.7632 9.17368 16.7632H4.82632C2.77454 16.7632 1.10526 15.0939 1.10526 13.0421V9.25393C1.10526 8.84763 1.43581 8.51708 1.84211 8.51708C2.2484 8.51708 2.57895 8.84763 2.57895 9.25393V12.2013H3.68421V3.06316C3.68421 2.65687 4.01476 2.32632 4.42105 2.32632C4.82735 2.32632 5.15789 2.65687 5.15789 3.06316V8.8855H6.26316V1.84211C6.26316 1.43581 6.59371 1.10526 7 1.10526C7.40629 1.10526 7.73684 1.43581 7.73684 1.84211V8.8855H8.8421V3.06316C8.8421 2.65687 9.17265 2.32632 9.57895 2.32632C9.98524 2.32632 10.3158 2.65687 10.3158 3.06316V8.8855H11.4211V4.39998C11.4211 3.99368 11.7516 3.66314 12.1579 3.66314C12.5642 3.66314 12.8947 3.99368 12.8947 4.39998V13.0421Z" fill={focused ? '#C04F5C' : '#A38689'} />
              </Svg>
              <Text style={[styles.iconLabel, { color: focused ? '#C04F5C' : '#A38689' }]}>About</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// Drawer Navigator component
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerType="front"
      initialRouteName="DrawerDashboard"
      drawerContent={props => <CustomDrawerContent {...props} />} // Custom drawer content
      screenOptions={({ route }) => ({
        header: () => <Header screen={route.name} />, // Set the custom Header component
        drawerActiveTintColor: '#e91e63',
        // drawerItemStyle: { marginVertical: 10 },
      })}
    >
      <Drawer.Screen
        name="DrawerDashboard"
        component={TabNavigator} // Include the Tab Navigator here
        options={{
          drawerItemStyle: { display: 'none' },
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons name="account" size={24} color={focused ? "#e91e63" : "black"} />
          ),
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Feather name="settings" size={24} color={focused ? "#e91e63" : "black"} />
          ),
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Saved Items"
        component={SavedScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesome5 name="save" size={24} color={focused ? "#e91e63" : "black"} />
          ),
          headerShown: true,
        }}
      />
      <Drawer.Screen
        name="Refer"
        component={ReferScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <MaterialCommunityIcons name="share" size={24} color={focused ? "#e91e63" : "black"} />
          ),
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
}

// Main App component
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      <StatusBar animated={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    fontSize: 10,
    marginTop: 2, // Adjust spacing between icon and label
  },
  createIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});