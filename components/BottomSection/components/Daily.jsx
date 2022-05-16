/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import { View, Text } from 'react-native';
import React from 'react';
import moment from 'moment';

import * as Icons from '../../../svg';
import iconMap from '../../../svg/iconMap.json';

function Daily({ data }) {
  return (
    <>
      <Text
        style={{
          fontFamily: 'Inter_600SemiBold',
          fontSize: 20,
          color: '#3F3F46',
          marginTop: 36,
          marginBottom: 8,
          paddingHorizontal: 20,
        }}
      >
        Daily
      </Text>
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        {data.forecast.forecastday.map((item, index) => (
          <View
            key={`day-${index}`}
            style={{
              marginBottom: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'white',
              padding: 16,
              borderRadius: 8,
            }}
          >
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            >
              {(() => {
                const icon = iconMap[
                  iconMap.findIndex((i) => item.day.condition.code === i.code)
                ].dayIcon;
                // convert icon name to camel case
                const iconName = icon.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
                const Icon = Icons[iconName];
                return <Icon width="64" height="64" color="#3F3F46" />;
              })()}
              <View
                style={{
                  marginLeft: 8,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 18,
                    color: '#3F3F46',
                  }}
                >
                  {moment(item.date).format('dddd')}
                </Text>
                <Text
                  style={{
                    fontFamily: 'Inter_500Medium',
                    fontSize: 14,
                    marginTop: 4,
                    color: '#71717A',
                  }}
                >
                  {item.day.condition.text}
                </Text>
              </View>
            </View>
            <Text style={{
              fontFamily: 'Inter_600SemiBold',
              fontSize: 18,
              color: '#3F3F46',
            }}
            >
              <Text style={{
                fontFamily: 'Inter_500Medium',
                color: '#71717A',
              }}
              >
                {item.day.avgtemp_c.toFixed(1)}
                °/
              </Text>
              {item.day.maxtemp_c.toFixed(1)}
              °
            </Text>
          </View>
        ))}
      </View>
    </>
  );
}

export default Daily;
