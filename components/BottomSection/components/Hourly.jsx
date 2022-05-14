/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import {
  View, Text, ScrollView, Image,
} from 'react-native';
import React from 'react';
import moment from 'moment';

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
              <Image
                source={{
                  uri:
                    `https:${item.condition.icon.replace('64x64', '128x128')}`,
                }}
                style={{
                  width: 56,
                  height: 56,
                }}
              />
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
