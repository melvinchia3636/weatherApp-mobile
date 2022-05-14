/* eslint-disable react/prop-types */
import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';

function TopSection({ data }) {
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 36,
        }}
      >
        <Image
          source={{
            uri:
                  `https:${
                    data.current.condition.icon.replace('64x64', '128x128')}`,
          }}
          style={{
            width: 96,
            height: 96,
          }}
        />
        <Text
          style={{
            fontFamily: 'Inter_600SemiBold',
            fontSize: 40,
            color: 'white',
            marginLeft: 16,
          }}
        >
          {data.current.temp_c}
          °C
        </Text>
      </View>
      <Text
        style={{
          fontFamily: 'Inter_400Regular',
          textAlign: 'center',
          color: 'white',
          fontSize: 24,
          marginTop: 12,
        }}
      >
        {data.current.condition.text}
      </Text>
      <Text
        style={{
          fontFamily: 'Inter_600SemiBold',
          textAlign: 'center',
          color: 'white',
          fontSize: 16,
          marginTop: 8,
        }}
      >
        {moment(data.location.localetime_epoch).format(
          'dddd, MMMM DD, YYYY',
        )}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 24,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <FontAwesome name="caret-up" size={22} color="white" />
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              marginLeft: 8,
              fontFamily: 'Inter_600SemiBold',
            }}
          >
            {data.forecast.forecastday[0].day.maxtemp_c}
            °C
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 32,
          }}
        >
          <FontAwesome name="caret-down" size={22} color="white" />
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              marginLeft: 8,
              fontFamily: 'Inter_600SemiBold',
            }}
          >
            {data.forecast.forecastday[0].day.mintemp_c}
            °C
          </Text>
        </View>
      </View>
    </View>
  );
}

export default TopSection;
