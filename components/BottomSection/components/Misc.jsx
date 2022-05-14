/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import { View, Text } from 'react-native';
import React from 'react';
import { Entypo, FontAwesome5, Octicons } from '@expo/vector-icons';

function Misc({ data }) {
  return (
    <View style={{
      marginTop: 36,
    }}
    >
      <View style={{
        flexDirection: 'row',
        marginHorizontal: 20,
      }}
      >
        <View style={{
          backgroundColor: 'white',
          padding: 16,
          flex: 1,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        >
          <View style={{
            width: 42,
            height: 42,
            borderRadius: 30,
            backgroundColor: '#0EA5E960',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <FontAwesome5 name="wind" size={24} color="#0EA5E9" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                color: '#3F3F46',
                marginLeft: 16,
              }}
            >
              {data.current.wind_kph}
              {' '}
              km/h
            </Text>
            <Text
              style={{
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                color: '#3F3F46',
                marginLeft: 16,
              }}
            >
              Wind
            </Text>
          </View>
        </View>
        <View style={{
          backgroundColor: 'white',
          padding: 16,
          flex: 1,
          borderRadius: 8,
          marginLeft: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        >
          <View style={{
            width: 42,
            height: 42,
            borderRadius: 30,
            backgroundColor: '#0EA5E960',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Entypo name="water" size={24} color="#0EA5E9" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                color: '#3F3F46',
                marginLeft: 16,
              }}
            >
              {data.current.humidity}
              %
            </Text>
            <Text
              style={{
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                color: '#3F3F46',
                marginLeft: 16,
              }}
            >
              Humidity
            </Text>
          </View>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 8,
      }}
      >
        <View style={{
          backgroundColor: 'white',
          padding: 16,
          flex: 1,
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        >
          <View style={{
            width: 42,
            height: 42,
            borderRadius: 30,
            backgroundColor: '#0EA5E960',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Entypo name="cloud" size={24} color="#0EA5E9" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                color: '#3F3F46',
                marginLeft: 16,
              }}
            >
              {data.current.cloud}
              %
            </Text>
            <Text
              style={{
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                color: '#3F3F46',
                marginLeft: 16,
              }}
            >
              Cloud Cover
            </Text>
          </View>
        </View>
        <View style={{
          backgroundColor: 'white',
          padding: 16,
          flex: 1,
          borderRadius: 8,
          marginLeft: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        >
          <View style={{
            width: 42,
            height: 42,
            borderRadius: 30,
            backgroundColor: '#0EA5E960',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Octicons name="sun" size={24} color="#0EA5E9" />
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                color: '#3F3F46',
                marginLeft: 16,
              }}
            >
              {data.current.uv}
            </Text>
            <Text
              style={{
                fontFamily: 'Inter_400Regular',
                fontSize: 12,
                color: '#3F3F46',
                marginLeft: 16,
              }}
            >
              UV Index
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Misc;
