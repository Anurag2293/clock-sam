import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TextInput, Button } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { NavigationContainer } from '@react-navigation/native';
import globalStyles from '../style/global';

export default function TimerClock({ navigation }) {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const setTime = (minutes, seconds) => {
    let milliSeconds = ((minutes * 60) + seconds )*1000;
    setTimerDuration(milliSeconds);
  }
  


  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.customHeader}>
        <TouchableOpacity
          style={globalStyles.customHeader}
          onPress={() => navigation.navigate('Timer')}>
          <Text style={globalStyles.headerCurrentScreenText}>Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.customHeader}
          onPress={() => navigation.navigate('Alarm')}>
          <Text style={globalStyles.headerDefaultText}>Alarm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.customHeader}
          onPress={() => navigation.navigate('Stopwatch')}>
          <Text style={globalStyles.headerDefaultText}>Stopwatch</Text>
        </TouchableOpacity>
      </View>

      <View style={globalStyles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setMins}
            value={mins}
            placeholder="Mins"
            keyboardType="numeric"
          />
          <Text>:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setSecs}
            value={secs}
            placeholder="Secs"
            keyboardType="numeric"
          />
          <TouchableHighlight
            onPress={() => {
              setTime(mins, secs);
            }}
            style={styles.button2}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.sectionStyle}>
          <Timer
            totalDuration={timerDuration}
            start={isTimerStart}
            reset={resetTimer}
            options={options}
            handleFinish={() => {
              alert('Time Over!');
            }}
            getTime={(time) => {
              console.log(time);
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button1}
            onPress={() => {
              setIsTimerStart(false);
              setResetTimer(true);
            }}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button2}
            onPress={() => {
              setIsTimerStart(!isTimerStart);
              setResetTimer(false);
            }}>
            <Text style={styles.buttonText}>
              {!isTimerStart ? 'Start' : 'Pause'}
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  input: {
    fontSize: 25,
    textDecorationLine: 'underline',
  },
  confirmText: {
    fontSize: 20,
    //margin: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  sectionStyle: {
    flex: 3,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10
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
    borderStyle: 'dashed',
    borderRadius: 5,
    borderColor: 'red',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'black',
  },
};

