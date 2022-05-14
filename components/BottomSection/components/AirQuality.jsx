/* eslint-disable react/prop-types */
import { View, Text } from 'react-native';
import React from 'react';
import { Colors } from 'react-native-paper';

const API_LEVEL_MAP = {
  pm10: [
    [0, 50],
    [51, 100],
    [101, 250],
    [251, 350],
    [351, 430],
    [431, 99999],
  ],
  pm2_5: [
    [0, 30],
    [31, 60],
    [61, 90],
    [91, 120],
    [121, 250],
    [251, 99999],
  ],
  so2: [
    [0, 40],
    [41, 80],
    [81, 380],
    [381, 800],
    [801, 1600],
    [1601, 99999],
  ],
  no2: [
    [0, 40],
    [41, 80],
    [81, 180],
    [181, 280],
    [281, 400],
    [401, 99999],
  ],
  o3: [
    [0, 50],
    [51, 100],
    [101, 168],
    [169, 208],
    [209, 748],
    [749, 99999],
  ],
  co: [
    [0, 1000],
    [1001, 2000],
    [2001, 10000],
    [10001, 17000],
    [17001, 34000],
    [34001, 999999],
  ],
};

const API_LEVEL_COLOR = [
  Colors.green500,
  Colors.lime500,
  Colors.yellow700,
  Colors.orange500,
  Colors.red500,
  Colors.red900,
];

// eslint-disable-next-line react/prop-types
function AirQuality({ data }) {
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
        Air Quality
      </Text>
      <View style={{
        flex: 1,
        marginBottom: 36,
        backgroundColor: 'white',
        padding: 32,
        borderRadius: 8,
        marginHorizontal: 20,
      }}
      >
        {[['co', 'no2', 'o3'], ['so2', 'pm2_5', 'pm10']].map((e, i) => (
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: !i ? 32 : 0,
          }}
          >
            {e.map((item) => (
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              >
                <View style={{
                  width: 68,
                }}
                >
                  <Text style={{
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 18,
                    color: '#3F3F46',
                  }}
                  >
                    {data.current.air_quality[item].toFixed(1)}
                  </Text>
                  <Text style={{
                    fontFamily: 'Inter_400Regular',
                    fontSize: 12,
                    marginTop: -4,
                    color: '#3F3F46',
                  }}
                  >
                    {item.toUpperCase().replace('_', '.')}
                  </Text>
                </View>
                <View style={{
                  height: 40,
                  width: 4,
                  backgroundColor: '#F4F4F5',
                  justifyContent: 'flex-end',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
                >
                  <View style={{
                    height: Math.max(40 * (data.current.air_quality[item]
                    / API_LEVEL_MAP[item][5][0]), 3),
                    width: 4,
                    backgroundColor: API_LEVEL_COLOR[API_LEVEL_MAP[item].findIndex(
                      ([min, max]) => Math.ceil(data.current.air_quality[item]) >= min
                      && Math.ceil(data.current.air_quality[item]) <= max,
                    )],
                    borderRadius: 8,
                  }}
                  />
                </View>
              </View>
            ))}
          </View>
        ))}
      </View>
    </>
  );
}

export default AirQuality;
