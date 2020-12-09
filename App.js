import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from'@react-navigation/stack'

const Stack = createStackNavigator()
import PacienteList from './screens/PacienteList'
import CreatePacienteScreen from './screens/CreatePacienteScreen'
import PacienteDetailScreen from './screens/PacienteDetailScreen'

function MyStack(){

  return(
    <Stack.Navigator>
       <Stack.Screen name="PacienteList" component={PacienteList} 
       options={{title:'Lista de pacientes'}}/>
       <Stack.Screen name="CreatePacienteScreen" component={CreatePacienteScreen}
       options={{title:'Crear un nuevo paciente'}} />
      <Stack.Screen name="PacienteDetailScreen" component={PacienteDetailScreen}
      options={{title:'Detalles del paciente'}}
      />
    </Stack.Navigator>

    
  )
}
export default function App() {
  return (
    
    <NavigationContainer>
     <MyStack/>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
