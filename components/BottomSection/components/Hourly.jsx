/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import {
  View, Text, ScrollView,
} from 'react-native';
import React from 'react';
import moment from 'moment';
import * as Icons from '../../../svg';
import iconMap from '../../../svg/iconMap.json';

function Hourly({ data }) {
  return (
    <>
      <Text
        style={{
          fontFamily: 'Inter_600SemiBold',
          fontSize: 20,
          color: '#3F3F46',
          marginBottom: 8,
          paddingHorizontal: 20,
          marginTop: 36,
        }}
      >
        Hourly
      </Text>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}
        >
          {data.forecast.forecastday[0].hour.map((item, index) => (
            <View
              key={`hour-${index}`}
              style={{
                marginRight: index === 23 ? 40 : 8,
                marginBottom: 2,
                alignItems: 'center',
                backgroundColor: 'white',
                paddingVertical: 16,
                paddingHorizontal: 24,
                borderRadius: 8,
              }}
            >
              {(() => {
                const icon = iconMap[
                  iconMap.findIndex((i) => item.condition.code === i.code)
                ][item.is_day ? 'dayIcon' : 'nightIcon'];
                // convert icon name to camel case
                const iconName = icon.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                const Icon = Icons[iconName];
                return <Icon width="64" height="64" color="#3F3F46" />;
              })()}
              <Text
                style={{
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 18,
                  marginTop: 8,
                  color: '#3F3F46',
                }}
              >
                {item.temp_c.toFixed(1)}
                °
              </Text>
              <Text
                style={{
                  fontFamily: 'Inter_500Medium',
                  fontSize: 12,
                  marginTop: 4,
                  color: '#71717A',
                }}
              >
                {moment(item.time_epoch * 1000).format('hh:mm a')}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

export default Hourly;
