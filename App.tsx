import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, TextInput} from 'react-native';
import { RootStackParamList } from './types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import React from 'react';


export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen1' component={Screen1}></Stack.Screen>
        <Stack.Screen name='Screen2' component={Screen2}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

type Screen1Prop = NativeStackScreenProps<RootStackParamList, 'Screen1'>;
const Screen1: React.FC<Screen1Prop> = (props) => {
  const [name, setName] = useState<string>(''); // State for name
  const [surname, setSurname] = useState<string>(''); // State for surname
  const [studentNumber, setStudentNumber] = useState<string>(''); // State for student number

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text1}>Enter your name:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter name'
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.text1}>Enter your surname:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter surname'
          value={surname}
          onChangeText={setSurname}
        />

        <Text style={styles.text1}>Enter your student number:</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter student number'
          value={studentNumber}
          onChangeText={setStudentNumber}
        />

        <TouchableHighlight
          style={styles.button}
          onPress={() => props.navigation.navigate('Screen2', { name, surname, studentNumber })}
        >
          <Text style={styles.buttonText}>Save Name</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

type Screen2Prop = NativeStackScreenProps<RootStackParamList, 'Screen2'>;
const Screen2: React.FC<Screen2Prop> = (props) => {
  const { name, surname, studentNumber } = props.route.params;

  return (
    <View style={styles.container3}>
      <View style={styles.container4}>
        <Text style={styles.text2}>Hi, {name} {surname}!</Text>
        <Text style={styles.text2}>Student Number: {studentNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5e4ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text1: {
    textAlign: 'auto',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  text2: {
    textAlign: 'auto',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  container2: {
    marginTop: 400,
    width: 500,
    height: 400,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container3: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container4: {
    marginTop: 300,
    width: 500,
    height: 400,
    backgroundColor: 'pink', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 150,
    height: 50,
    fontSize: 22,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: 400,
    height: 40,
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: 'white',
    marginTop: 20,
    fontSize: 20,
  },
});
