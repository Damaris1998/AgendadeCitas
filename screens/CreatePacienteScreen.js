
import React,{ useState } from'react';
import { View,TextInput,Button,ScrollView,StyleSheet}from 'react-native'
import firebase from '../database/firebase'

const CreatePacienteScreen = (props) => {

     const [state, setState] =useState({
        nombre:"",
        apellido:"",
        sexo:"",
        fecha:"",
        hora:"",
        enfermedad:""
     });

   const handleChangeText= (nombre,value)=>{
   setState({...state, [nombre]: value});
    };
        
    const saveNewPaciente =async()=>{

        if (state.nombre=== ''){
            alert('Escriba los datos')
     }else{
         try{
          await firebase.db.collection('paciente').add({
        nombre:state.nombre,
        apellido:state.apellido,
        sexo:state.sexo,
        fecha:state.fecha,
        hora:state.hora,
        enfermedad:state.enfermedad
        });
       props.navigation.navigate('PacienteList');
        }catch(error){
            console.log(error);
        }
        
    }

    }; 


    return (
       <ScrollView style={styles.container}>
           <View style= {styles.inputGroup} >
               <TextInput placeholder="Nombre Paciente" onChangeText={(value) => handleChangeText("nombre", value) }/>
           </View>
           <View style= {styles.inputGroup}>
               <TextInput placeholder="Apellido Paciente" onChangeText={(value) => handleChangeText("apellido", value) } />
           </View>
           <View style= {styles.inputGroup}>
               <TextInput placeholder="Sexo Paciente"onChangeText={(value) => handleChangeText("sexo", value) }/>
           </View>
           <View style= {styles.inputGroup}>
               <TextInput placeholder=" Fecha"onChangeText={(value) => handleChangeText("fecha", value) }/>
           </View>
           <View style= {styles.inputGroup}>
               <TextInput placeholder="Hora"onChangeText={(value) => handleChangeText("hora", value) }/>
           </View>
           <View style= {styles.inputGroup}>
               <TextInput placeholder="Enfermedad"onChangeText={(value) => handleChangeText("enfermedad", value) }/>
           </View>

           <View>
               <Button title="Guardar paciente" onPress= { () =>saveNewPaciente() }/>
           </View>
       </ScrollView>
    )
}
 const styles= StyleSheet.create({
     container:{
        flex:1,
        padding:35,

    },   
inputGroup:{
    flex:1,
    padding:0,
    marginBottom:15,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
} 
})

export default CreatePacienteScreen