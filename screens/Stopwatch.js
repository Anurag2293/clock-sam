import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { NavigationContainer } from '@react-navigation/native';
import globalStyles from '../style/global';

export default function StopwatchClock({ navigation }) {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.customHeader}>
        <TouchableOpacity
          style={globalStyles.customHeader}
          onPress={() => navigation.navigate('Timer')}
        >
          <Text style={globalStyles.headerDefaultText}>Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.customHeader}
          onPress={() => navigation.navigate('Alarm')}
        >
          <Text style={globalStyles.headerDefaultText}>Alarm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.customHeader}
          onPress={() => navigation.navigate('Stopwatch')}
        >
          <Text style={globalStyles.headerCurrentScreenText}>Stopwatch</Text>
        </TouchableOpacity>

      </View>

      <View style={globalStyles.content}>
        <View style={styles.sectionStyle}>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            reset={resetStopwatch}
            options={options}
            getTime={(time) => {
              console.log(time);
            }}
          />

          <View style={styles.buttonContainer}>
            <TouchableHighlight
              onPress={() => {
                setIsStopwatchStart(false);
                setResetStopwatch(true);
              }}
              style={styles.button1}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
              }}
              style={styles.button2}
            >
              <Text style={styles.buttonText}>
                {!isStopwatchStart ? 'Start' : 'Pause'}
              </Text>
            </TouchableHighlight>
          </View>

        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button1: {
    backgroundColor: 'grey',
    borderRadius: 30,
    marginHorizontal: 30
  },
  button2: {
    backgroundColor: '#7900FF',
    borderRadius: 30,
    marginHorizontal: 30
  },
  
});

const options = {
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: 200,
  },
  text: {
    fontSize: 31,
    color: 'black',
  },
};