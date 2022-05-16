/* eslint-disable react/prop-types */
import { View, Text } from 'react-native';
import React from 'react';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';

import * as Icons from '../svg';
import iconMap from '../svg/iconMap.json';

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
          marginTop: 42,
        }}
      >
        {(() => {
          const icon = iconMap[
            iconMap.findIndex((i) => data.current.condition.code === i.code)
          ][data.current.is_day ? 'dayIcon' : 'nightIcon'];
          // convert icon name to camel case
          const iconName = icon.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          const Icon = Icons[iconName];
          return <Icon width="96" height="96" color="white" />;
        })()}
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
          marginTop: 8,
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
