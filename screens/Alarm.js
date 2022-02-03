import React from 'react';
import { SafeAreaView,View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import globalStyles from '../style/global';
import { NavigationContainer } from '@react-navigation/native';
import ListAlarms from '../alarm_functionalities/components/ListAlarms';
import TimePicker from '../alarm_functionalities/components/TimePicker';

import { Provider} from 'react-redux';
import configureStore from '../alarm_functionalities/store';

const store = configureStore();

function Alarm({ navigation }) {
    return (
        <Provider store={store}>
            <View style={globalStyles.container}>
            <View style={globalStyles.customHeader}>
                <TouchableOpacity
                    style={globalStyles.customHeader}
                    onPress={() => navigation.navigate('Timer')}
                    >
                    <Text style={globalStyles.headerDefaultText}>Timer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={globalStyles.customHeader}
                onPress={() => navigation.navigate('Alarm')}
                >
                    <Text style={globalStyles.headerCurrentScreenText}>Alarm</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={globalStyles.customHeader}
                    onPress={() => navigation.navigate('Stopwatch')}
                    >
                    <Text style={globalStyles.headerDefaultText}>Stopwatch</Text>
                </TouchableOpacity>

            </View>

            <View style={globalStyles.content}>
                <View style={styles.mainContainer}>
                    
                    <SafeAreaView style={styles.listAlarms}>
                        <ListAlarms />
                    </SafeAreaView>

                    <View style={styles.timePicker}>
                        <TimePicker />
                    </View>
                </View>
            </View>
        </View>
        </Provider>
    );
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        fontSize: 25,
        padding: 20,

    },
    timePicker: {
        paddingTop: "10%",
        width: "50%",
        bottom: 20
    },
    listAlarms: {
        flex: 1,
        width: "100%"
    }
});

export default Alarm;