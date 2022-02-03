import React, { useState } from 'react';
import { Button, Alert, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import { addAlarm } from '../actions/alarms';

var Sound = require('react-native-sound');
Sound.setCategory('Alarm');

var alarm1 = new Sound('alarm1.mp3',Sound.MAIN_BUNDLE);

const TimePicker = (props) => {
    const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

    const makeid = () => {
        var length = 5;
        var result = "";
        var characters = "0123456789";
        var charactersLength = characters.length;
        for(var i = 0; i<length; i++){
            result += characters.charAt(Math.floor(Math.random() + charactersLength));
        }
        return result;
    }

    const showDateTimePicker = () => {
        setIsDateTimePickerVisible(true);
    }

    const hideDateTimePicker = () => {
        setIsDateTimePickerVisible(false);
    }

    const handleDatePicker = (dateTime) => {
        var currentTime = Date.now();
        if (dateTime.getTime() < currentTime) {
            Alert.alert("Please choose future time");
            hideDateTimePicker();
            return;
        }

        const alarmNotifData = {
            id: makeid(),
            title: "Alarm Ringing",
            message: "My Notification Mesaage",
            channel: "alarm-channerl",
            tcker: "My Notification Message",
            auto_cancel: true,
            vibrate: true,
            vibration: 100,
            small_icon: "ic_launcher",
            large_icon: "ic_launcher",
            play_sound: true,
            sound_name: alarm1,
            color: "red",
            schedule_once: true,
            tag: "some_tag",
            fire_Date: Date.now(),
            date: { value : dateTime}
        }

        props.add(alarmNotifData);
        hideDateTimePicker();
    }
    
    return (
        <>
            <Button
                title="+ Add Alarms"
                color="#7900FF"
                onPress={() => {
                    showDateTimePicker();
                }} />

            <DateTimePicker 
                mode="datetime"
                isVisible={isDateTimePickerVisible}
                onConfirm={handleDatePicker}
                onCancel={hideDateTimePicker}
            />

        </>
    )
}

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps =dispatch => {
    return {
        add: alarmNotifObj => {
            dispatch(addAlarm(alarmNotifObj))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimePicker);