/* eslint-disable react/prop-types */
import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { MaterialIcons, Octicons } from '@expo/vector-icons';

function Appbar({ data, ...props }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9999,
        width: '100%',
        height: 64,
        paddingHorizontal: 20,
        backgroundColor: '#0EA5E9',
      }}
    >
      <Pressable onPress={props?.navigation?.openDrawer}>
        <MaterialIcons name="menu" size={26} color="#fff" />
      </Pressable>
      <Text
        style={{
          color: 'white',
          fontFamily: 'Inter_600SemiBold',
          marginLeft: 4,
          fontSize: 18,
          width: '70%',
        }}
        numberOfLines={1}
      >
        {data.location.name}
        <Text
          style={{
            color: 'white',
            fontFamily: 'Inter_300Light',
          }}
        >
          ,
          {' '}
          {data.location.country}
        </Text>
      </Text>
      <Pressable
        onPress={() => console.log('fml')}
        style={{
          position: 'relative',
          zIndex: 1000,
        }}
      >
        <Octicons name="search" size={22} color="white" />
      </Pressable>
    </View>
  );
}

export default Appbar;
