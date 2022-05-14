import { View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

function Waves() {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          top: -90,
          left: 0,
          width: '100%',
          height: 256,
        }}
      >
        <Svg viewBox="0 0 1440 320" height="40%" width="100%">
          <Path
            fill="black"
            fillOpacity="0.1"
            d="M0,192L60,197.3C120,203,240,213,360,192C480,171,600,117,720,112C840,107,960,149,1080,154.7C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </Svg>
      </View>
      <View
        style={{
          position: 'absolute',
          top: -106,
          left: 0,
          width: '100%',
          height: 296,
        }}
      >
        <Svg viewBox="0 0 1440 320" height="50%" width="100%">
          <Path
            fill="#F4F4F5"
            fill-opacity="1"
            d="M0,128L60,117.3C120,107,240,85,360,106.7C480,128,600,192,720,229.3C840,267,960,277,1080,256C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </Svg>
      </View>
    </>
  );
}

export default Waves;
