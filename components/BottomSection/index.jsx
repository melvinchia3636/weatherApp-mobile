/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import {
  View, ScrollView,
} from 'react-native';
import React from 'react';
import Waves from './components/Waves';
import Hourly from './components/Hourly';
import Daily from './components/Daily';
import Misc from './components/Misc';
import AirQuality from './components/AirQuality';

function BottomSection({ data }) {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <ScrollView
        style={{
          width: '100%',
          height: 200,
        }}
      >
        <View
          style={{
            width: '100%',
            backgroundColor: '#F4F4F5',
            marginTop: 364,
          }}
        >
          <Waves />
          <View
            style={{
              height: '100%',
              width: '100%',
            }}
          >
            <Misc data={data} />
            <Hourly data={data} />
            <Daily data={data} />
            <AirQuality data={data} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default BottomSection;
