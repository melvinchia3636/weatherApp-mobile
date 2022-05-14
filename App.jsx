/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/dev';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Octicons } from '@expo/vector-icons';
import Appbar from './components/Appbar';
import TopSection from './components/TopSection';
import BottomSection from './components/BottomSection';

const API_KEY = '3226026245ad4bd4a0d75052220405';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

function Home({ data }) {
  return (
    <View
      style={{
        backgroundColor: '#0EA5E9',
        height: '100%',
      }}
    >
      <Appbar data={data} />
      <TopSection data={data} />
      <BottomSection data={data} />
      <StatusBar backgroundColor="#0EA5E9" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${'new york'}&days=3&aqi=yes&alerts=no`,
    )
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }
  return (data
    ? (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <Appbar {...props} data={data} />,
            drawerActiveTintColor: '#0EA5E9',
            drawerActiveBackgroundColor: '#0EA5E930',
            drawerLabelStyle: {
              fontFamily: 'Inter_600SemiBold',
              fontSize: 16,
              marginLeft: -10,
            },
            drawerItemStyle: {
              paddingLeft: 10,
            },
          }}
        >
          <Drawer.Screen
            name="Home"
            options={{
              drawerIcon: ({color}) => <Octicons name="home" size={22} color={color} />,
            }}
          >
            {(props) => <Home {...props} data={data} />}
          </Drawer.Screen>
          <Drawer.Screen
            name="Search"
            options={{
              drawerIcon: ({color}) => <Octicons name="search" size={22} color={color} />
            }}
            component={() => <></>}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    )
    : null);
}
